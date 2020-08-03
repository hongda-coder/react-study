import React, { PureComponent } from 'react'

export default class Jobe extends PureComponent {
  toDetails (id) {
    this.props.history.push({pathname:"/detalis/" + id})
  }
  render() {
    const id = "252"
    return (
      <div >
        <div onClick={e => this.toDetails(id)}>职位</div>
      </div>
    )
  }
}
