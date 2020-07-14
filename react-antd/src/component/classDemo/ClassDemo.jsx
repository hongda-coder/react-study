import React, { PureComponent } from 'react'
import myClass from 'classnames'

import './demo.css'

export default class ClassDemo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isSelect: true,
      isShow: true
    }
  }
  render() {
    const { isSelect, isShow } = this.state

    return (
      <div>
        <div className={'active title'}>我还以为你不会选我呢1</div>
        {/* 注意 此处有添加一个小空格 */}
        <div className={'title' + (isSelect ? ' active' : '')}>我还以为你不会选我呢2</div>
        <div className={['title', (isSelect ? 'active' : '')].join(' ')}>我还以为你不会选我呢3</div>

        {/* classnames添加class */}
        <h2 className='title active'>来呀快活呀4</h2>
        <h2 className={myClass('active', 'title')}>来呀快活呀5</h2>
        <h2 className={myClass({ 'active': isSelect, 'rabbit': isShow }, 'title')}>来呀快活呀6</h2>
        <h2 className={myClass('title', { 'active': isSelect })}>来呀快活呀7</h2>
        <h2 className={myClass(['active', 'title'])}>来呀快活呀8</h2>
        <h2 className={myClass(['active', 'title', { 'rabbit': isShow }])}>来呀快活呀9</h2>

      </div>
    )
  }
}
