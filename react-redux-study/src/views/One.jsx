import React, { PureComponent } from 'react'
import store from '../store'

import { actionCount1 } from '../store/actions'

export default class One extends PureComponent {
  constructor () {
    super()
    this.state = {
      count: store.getState().count
    }
  }

  componentDidMount () {
   this.unsubscribe = store.subscribe(() => {
      this.setState({
        count: store.getState().count
      })
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  increment () {
    store.dispatch(actionCount1(1))
  }

  render() {
    return (
      <div>
        <h2>one</h2>
        <div>
          {this.state.count}
        </div>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }
}
