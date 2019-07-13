import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image} from '@tarojs/components'
import { AtTextarea, AtImagePicker, AtList, AtListItem, AtButton } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './publish.scss'
import selectGroupImg from '../../icons/selectGroup.png'
import isPublicImg from '../../icons/isPublic.png'


@inject('userStore')
@inject('appStore')
@observer
class Publish extends Component {
	constructor (props) {
    super(props)
    this.state = {
			content:"",
			imageFiles:[],
			isPublic: true,
    }
  }

  config = {
    navigationBarTitleText: '轻状态'
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
	
	onChange = ()=>{
		
	}
	
	onFail = ()=>{
		
	}
	
	onImageClick = ()=>{
		
	}
	
  render() {

    const { userStore: { userName } } = this.props
    const { appStore: { openId } } = this.props

    return (<View>
		<AtTextarea
        value={this.state.content}
        maxLength={200}
        placeholder='这一刻的想法...'
				className='content-textarea'
      />
		<View className='divider' style='margin-bottom:10PX;'></View>
		<AtImagePicker
			length={3}
			files={this.state.imageFiles}
			onChange={this.onChange.bind(this)}
			onFail={this.onFail.bind(this)}
			onImageClick={this.onImageClick.bind(this)}
		/>
		<View className='divider' style='margin-top:80PX;'></View>
		<AtList hasBorder={false}>
			<AtListItem title='选择校园小组' arrow='right' thumb={selectGroupImg}/>
			<AtListItem title='公开到广场' switchColor='#00CCFF' switchIsCheck={this.state.isPublic} isSwitch thumb={isPublicImg}/>
		</AtList>
		<View className='bottom-bar'>
			<AtButton className='publish-btn' type='primary' size='small'>发布</AtButton>
		</View>
		</View>)
  }
}

export default Publish 
