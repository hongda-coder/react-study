import React, { PureComponent } from 'react'
import { Card } from 'antd'
import { SwitchTransition, CSSTransition } from 'react-transition-group'


export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true
    }
  }

  toggle() {
    this.setState({
      isShow: !this.state.isShow
    })
    console.log(this.state.isShow)
  }

  render() {
    const { Meta } = Card
    const { isShow } = this.state
    return (
      <div className="content">

        <SwitchTransition>
          <CSSTransition 
            classNames="btn" 
            key={isShow?'隐藏' : '显示'}
            timeout={300} 
            onClick={e => this.toggle()}>
            <button>
              {isShow ? '隐藏' : '显示'}
            </button>
          </CSSTransition>
        </SwitchTransition>
        <CSSTransition classNames="card"
          in={isShow}
          timeout={500}
          unmountOnExit={true}
          appear
          onEnter={e => console.log("开始进入")}
          onEntering={e => console.log("进入中")}
          onEntered={e => console.log("进入完成")}
          onExit={e => console.log("开始退出")}
          onExiting={e => console.log("退出中")}
          onExited={e => console.log("退出完成")}
        >
          {/* appear设置首次加载的动画 */}
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </CSSTransition>
      </div>
    )
  }
}
