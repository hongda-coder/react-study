import React, {PureComponent} from 'react'

import {actionCount2, actionCount4} from '../store/actions'

import { connect } from '../utils/connect'


class Home extends PureComponent { 
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
    count: state.count
  }
}

const mapDispatchToProp = dispatch => {
  return {
    delOne: function () {
      dispatch(actionCount2(1))
    },
    delFive: function () {
      dispatch(actionCount4(5))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Home)

