import React, { PureComponent } from 'react'
import moment from 'moment'
import { Input, Button, Comment, Avatar, Tooltip } from 'antd'
import { DeleteOutlined } from "@ant-design/icons"
import './index.css' 
import 'moment/locale/zh-cn'   // 中文时间

export default class AntdDemo2 extends PureComponent {
  constructor () {
    super()
    this.state = {
      commentLists:[]
    }
  } 
  addComments (commentInfo) {
    this.setState({
      commentLists: [...this.state.commentLists, commentInfo]
    })
  } 
  removeComment (index) {  
    const newComment = [...this.state.commentLists];  
    newComment.splice(index, 1);
    this.setState({
      commentLists: newComment
    })
  } 
  render() {
    const { commentLists } = this.state
    return (
      <div className="wrap">
          {
            commentLists.map((item, index) => {
              return <Item key={item.id}  comment={item} removeItem={e => this.removeComment(index)} />
            })
          }
        <InputContent addComments={(commentInfo) => this.addComments(commentInfo)} />
      </div>
    )
  }
}

class Item extends PureComponent {
  constructor (props) {
    super(props)
    console.log(props)
  }

  removeItem() {
    this.props.removeItem()
  }
  render() {
    const { userame, avatar, content, datetime } = this.props.comment
    console.log(datetime)
    return (
      <div>
        <Comment
          author={<a href="/#">{userame}</a>}
          avatar={<Avatar src={avatar}/>}
          content={<div>{content}</div>}
          datetime={
            <Tooltip title={datetime.format("YYYY-MM-DD")}>
              <span>{datetime.fromNow()}</span>
            </Tooltip>
          }
          actions={[
            <span onClick={() => this.removeItem()}><DeleteOutlined />删除</span>
          ]}
        />
      </div>
    )
  }
}


class InputContent extends PureComponent {
  constructor () {
    super()
    this.state = {
    content: ''
    }
  }

  changeContent (e) { 
  this.setState({
    content: e.target.value
  })
  }

  addComments () {
    const commentInfo = {
    id: moment().valueOf(),
    avatar: "https://upload.jianshu.io/users/upload_avatars/23015363/a03eefff-4a15-4a52-8fd3-3a39559f2064?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
    userame: "木瓜娃子",
    datetime: moment(),
    content: this.state.content,
    comments: [
    ]
  }
  // 传递事件
  this.props.addComments(commentInfo);
  this.setState({
    content: ""
  })
  }

  render () {
  const { TextArea } = Input
    return (
      <div>
        <TextArea rows={4} value={this.state.content} onChange={(e) => this.changeContent(e)} />
        <Button type="primary" onClick={() => this.addComments()}>添加</Button>
      </div>
    )
  }
}
