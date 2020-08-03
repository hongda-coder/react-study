import React  from 'react'

import {actionCount1, actionCount3} from '../store/actions'

// import { connect } from '../utils/connect'

import { connect } from 'react-redux'

function Proflie (props) { 
  console.log(props)
    return (
      <div>
        <h2>profile</h2>
        <div>当前数量：{props.count}</div>
        <div>
          <button onClick={e => props.addOne()}>+1</button>
          <button onClick={e => props.addFive()}>+5</button>
        </div>

        <div>
          <ul>
            {
              props.banners.map((item, index) => {
                return <li key={item.acm}>{item.title}</li>
              })
            }
          </ul>
        </div>
      </div>
    ) 
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
    addOne: function () {
      dispatch(actionCount1())
    },
    addFive: function () {
      dispatch(actionCount3())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Proflie)
