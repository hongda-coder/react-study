import React, { PureComponent } from 'react'
import axios from 'axios'

export default class AxiosDemo extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }
  render() {
    return (
      <div>
        asd aads
      </div>
    )
  }

  // 拿到数据 发送ajax请求
  componentDidMount() {
    // this.getDataGet()
    // this.getDataPost()
    this.getAllData()
  }

  async getDataGet() {
    // axios({
    //   url: 'https://httpbin.org/get',
    //   params: {
    //     name: 'rabbit',
    //     age: 18
    //   }
    // }).then( res => {
    //   console.log(res)
    // }).catch(error => {
    //   console.log(error)
    // }) 
    const res = await axios.get('https://httpbin.org/get', {
      params: {
        name: 'ersha',
        age: 55
      }
    })
    console.log(res)
  }

  async getDataPost() {
    // axios({
    //   url: 'https://httpbin.org/post',
    //   params: {
    //     name: 'dasha',
    //     age: 18
    //   },
    //   method: 'POST'
    // }).then( res => {
    //   console.log(res)
    // }).catch(error => {
    //   console.log(error)
    // })
    const resp = await axios.post('https://httpbin.org/post', {
      params: {
        name: 'rabitia',
        age: 12
      }
    })
    console.log(resp)
  }

  async getAllData() {
    const reqFirst = axios({
      url: 'https://httpbin.org/get',
      params: { name: 'pig', smell: 'delicious' }
    })

    const reqSecond = axios({
      url: 'https://httpbin.org/post',
      params: { name: 'sansha', age: 16 },
      method: 'POST'
    })

    //  axios.all([reqFirst, reqSecond]).then( res=> {
    //   console.log(res)
    // })
    const res = axios.all([reqFirst, reqSecond])
    console.log(res)
  }

  // axios 创建实例
  moaa() {
    const instance = axios.create({
      baseURL: 'http://rabbit.com',
      timeout: 5000,
      header: {

      }
    })
  }
  // 请求响应与拦截
  six () {
    //  请求拦截
    axios.interceptors.request.use( config => {
      // 可以配置请求头
      // 实现全局请求的用户体验  loading
      // 使用第三方插件  qs  设置params/data序列化的操作
      return config
    })
    // 响应拦截
    axios.interceptors.response.use( res => {
      return res;
    }, error => {
      
    })
  }
}
