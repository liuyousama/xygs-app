import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import { AtButton, AtAvatar, AtIcon } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import Card from './card'
import './index.scss'


@inject('userStore')
@inject('appStore')
@observer
class Index extends Component {
	constructor (props) {
    super(props)
    this.state = {
      current: 0,
			currentItem: "new"
    }
  }

  config = {
    navigationBarTitleText: '拾趣社'
  }

  componentWillMount() {
		console.log('componentWillMount')
	}

  componentWillReact() {
    
  }

  componentDidMount() { }

  componentWillUnmount() {}

  componentDidShow() { }

  componentDidHide() { }

  setName = () => {
    const { userStore } = this.props
    userStore.setName('NoNo')
  }

  wxLogin = (res)=>{
    const { userStore } = this.props

    const {currentTarget:{userInfo}} = res
    //TODO set userinfo
    console.log(res)
  }
	
	handleClickTab = (value) => {
    this.setState({
      current: value
    })
  }
	
	handleClickItem = (item) => {
		this.setState({
			currentItem: item
		})
	}
	
	handleClickPage = (page) => {
		Taro.redirectTo({url:'/pages/index/group'})
	}
	
	handleClickPublish = () => {
		Taro.navigateTo({url:'/pages/index/publish'})
	}
  render() {

    const { userStore: { userName } } = this.props
    const { appStore: { openId } } = this.props
		const cardInfo = {
			avatar:'https://jdc.jd.com/img/200',
			nickname: '理工小白',
			time: '昨天',
			content: '校园公社第一天，打卡校园公社第一天，打卡校园公社第一天，打卡校园公社第一天，打卡',
			images: ['https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7',
			'https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7',
			'https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7',
			'https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7',
			'https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7'],
			relays:23,
			comments:34,
			goods:129
		}

    return (<View>
			<View className='header'>
			<AtButton type="primary" size='small' circle={true} className="activeBtn">广场</AtButton>	
			<AtButton type="secondary" size='small' circle={true} className="normalBtn" onClick={this.handleClickPage.bind(this)}>校园小组</AtButton>	
			</View>
			<View className='at-icon at-icon-add publishBtn' onClick={this.handleClickPublish.bind(this)}></View>
			<Swiper
			  className='swiper'
			  circular
			  autoplay>
			  <SwiperItem className='swiperItem'>
			    <Image
			    style='width: 94%;height: 100%;background: #fff;'
			    src='https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7'
			  />
			  </SwiperItem>
			  <SwiperItem className='swiperItem'>
			    <Image
			      style='width: 94%;height: 100%;background: #fff;'
			      src='https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7'
			    />
			  </SwiperItem>
			  <SwiperItem className='swiperItem'>
			    <Image
			    style='width: 94%;height: 100%;background: #fff;'
			    src='https://axure-file.lanhuapp.com/89d73180-88e3-4195-9c3c-f5e45540f966__3ab74fd0780052b0c0dbf621c85aacc7'
			  />
			  </SwiperItem>
			</Swiper>
			<View className='items'>
				<View className='tags'>
					<Text 
					className={this.state.currentItem=='new'?'item active':'item'} 
					onClick={this.handleClickItem.bind(this,'new')}>
					最新</Text>
					<Text 
					className={this.state.currentItem=='hot'?'item active':'item'} 
					onClick={this.handleClickItem.bind(this,'hot')}>
					最热</Text>
					<Text
					className={this.state.currentItem=='concentrate'?'item active':'item'} 
					onClick={this.handleClickItem.bind(this,'concentrate')}>
					关注</Text>
				</View>
				<View className='at-icon at-icon-search'></View>
			</View>
			<View className='divider'></View>
			<View className='cards'>
				<Card cardInfo={cardInfo} />
				<Card cardInfo={cardInfo} />
				<Card cardInfo={cardInfo} />
			</View>
		</View>)
  }
}

export default Index 
