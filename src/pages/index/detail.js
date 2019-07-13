import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtAvatar, AtIcon, AtCard } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './detail.scss'


@inject('userStore')
@inject('appStore')
@observer
class Detail extends Component {
	constructor (props) {
    super(props)
    this.state = {
			cardInfo:{}
    }
  }
	
  componentWillMount() {
		this.setState({
			cardInfo:{
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
		})
	}

  componentDidMount() {}

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
	
	previewImage = (image) => {
		Taro.previewImage({
			current: image,
			urls: this.props.cardInfo.images
		})
	}
	
  render() {

    const { userStore: { userName } } = this.props
    const { appStore: { openId } } = this.props
		var imgGroup = cardInfo.images.map((image)=>{
						return(
							<View className='img-item' onClick={this.previewImage.bind(this, image)}>
							<Image className='img-item' mode="aspectFill" style='background: #fff;width:100%;height:calc(30vw - 12PX);' src={image}/>
							</View>
						)
					})

    return (
		<View>
			<View className='card'>
				<AtAvatar circle image='https://jdc.jd.com/img/200' text="用户头像" size='small'></AtAvatar>
				<View className='main'>
					<View className='userInfo'>
						<View className='user'>
							<View className='nickname'>{cardInfo.nickname}</View>
							<View className='time'>{cardInfo.time}</View>
						</View>
						<View className='add'>+关注</View>
					</View>
					<View className='content'>{cardInfo.content}</View>
					<View className='img'>
					{
						imgGroup
					}
					</View>
					<View className='tags'>
						<View className='tag'>
							<AtIcon value='reload' size='22'></AtIcon>
							<Text className='tag-count'>  {cardInfo.relays}</Text>
						</View>
						<View className='tag'>
							<AtIcon value='message' size='22'></AtIcon>
							<Text className='tag-count'>  {cardInfo.comments}</Text>
						</View>
						<View className='tag tag-end'>
							<AtIcon value='heart' size='22'></AtIcon>
							<Text className='tag-count'>  {cardInfo.goods}</Text>
						</View>
					</View>
				</View>
			</View>
			<View className='divider'></View>
			<View style="padding:10PX 15PX;">热门评论(13)</View>
			<View className='comment'>
				<AtAvatar circle image='https://jdc.jd.com/img/200' text="用户头像" size='small'></AtAvatar>
				<View className='main'>
					<View className='header'>
						<View className='info'>
							<View className='nickname'>黑马警长</View>
							<View className='time'>11:34</View>
						</View>
						<View className='heart'>
							<AtIcon value='heart' size='22'></AtIcon>
							<Text className='count'>145</Text>
						</View>
					</View>
					<View className='content'>
						邹忌讽齐王纳妾，哈哈哈？
						<View className='reply-card'>
							<View className='reply'>
							<Text className='nickname'>猪说你有罪：</Text>
							<Text>有趣的灵魂胖得像猪，好看的外表  不能当饭吃</Text>
							</View>
							<View className='reply'>
							<Text className='nickname'>延安共产党：</Text>
							<Text>举起手来，缴枪不杀</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>)
  }
}

export default Detail 
