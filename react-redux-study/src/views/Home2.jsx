import React, {PureComponent} from 'react'
import axios from 'axios'

import {
  actionCount2, 
  actionCount4,
  getBanners,
  getRecommends 
} from '../store/actions'

// import { connect } from '../utils/connect'

import { connect } from 'react-redux'

class Home extends PureComponent {  

  componentDidMount () {
    this.getData()
  } 
  getData () {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then(res => {
      console.log(res.data.data)
      this.props.bannersData(res.data.data.banner.list)
      this.props.recommendsData(res.data.data.recommend.list)
      console.log(this.props)
    })
  } 
  render () {
    return (
      <div>
        <h2>home</h2>
        <div>当前数量：{this.props.count}</div>
        <div>
          <button onClick={e => this.props.delOne(1)}>-1</button>
          <button onClick={e => this.props.delFive(5)}>-5</button>
        </div>
      </div>
    ) 
  } 
}

const mapStateToProps = state => {
  return {
    count: state.count,
    banners: state.banners,
    recommends: state.recommends
  }
}

const mapDispatchToProp = dispatch => {
  return {
    delOne: function (num) {
      dispatch(actionCount2(num))
    },
    delFive: function (num) {
      dispatch(actionCount4(num))
    },
    bannersData: function (banners) {
      dispatch(getBanners(banners))
    },
    recommendsData: function (recommends) {
      dispatch(getRecommends(recommends))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Home)