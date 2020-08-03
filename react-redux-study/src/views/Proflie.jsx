import React  from 'react'

import {actionCount1, actionCount3} from '../store/actions'

import { connect } from '../utils/connect'

function Proflie (props) { 
    return (
      <div>
        <h2>profile</h2>
        <div>当前数量：{props.count}</div>
        <div>
          <button onClick={e => props.addOne(1)}>+1</button>
          <button onClick={e => props.addFive(5)}>+5</button>
        </div>
      </div>
    ) 
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProp = dispatch => {
  return {
    addOne: function () {
      dispatch(actionCount1(1))
    },
    addFive: function () {
      dispatch(actionCount3(5))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Proflie)

