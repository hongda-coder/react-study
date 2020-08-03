import React, {PureComponent} from 'react' 

import {
  actionCount2, 
  actionCount4,
  getHomeData,
} from '../../store/actions'

// import { connect } from '../utils/connect'

import { connect } from 'react-redux'

class Home extends PureComponent {  

  componentDidMount () {
    this.props.getHomeMultidata()
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
    getHomeMultidata() {
      dispatch(getHomeData)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Home)