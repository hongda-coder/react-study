import React, { PureComponent } from 'react'
import store from '../store'
import { actionCount2 } from '../store/actions'

export default class Two extends PureComponent {
  constructor () {
    super()
    this.state = {
      count: store.getState().count
    }
  }

  componentDidMount () {
    store.subscribe(() => {
      this.setState({
        count: store.getState().count
      })
    })
  }



  decrement () {
    store.dispatch(actionCount2(1))
  }
  render() {
    return (
      <div>
        <h2>Two</h2>
        <div>
          {this.state.count}
        </div> 
        <button onClick={e => this.decrement()}>-1</button>
      </div>
    )
  }
}
