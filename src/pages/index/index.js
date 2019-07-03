import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'


@inject('userStore')
@inject('appStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

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


  render() {

    const { userStore: { userName } } = this.props
    const { appStore: { openId } } = this.props

    return (
      <View className='app'>
        <Image
          mode="widthFix"
          className="image"
          src="http://ec2-18-218-40-213.us-east-2.compute.amazonaws.com:7001/images/5d1cb7c2a6069b1f76f96b1a" />
          <Button className="btn" open-type="getUserInfo" onGetUserInfo={this.wxLogin}>进入App</Button>
      </View>
    )
  }
}

export default Index 
