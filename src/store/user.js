import {observable,computed,action} from 'mobx'


const User = observable({
    userName:'Hello,world',
    nickName:'',
    gender:'',
    region:'',
    country:'',
    setName(name){
        this.userName = name
    },
    setWechatDetail(wechatUser){

    }
})

export default  User