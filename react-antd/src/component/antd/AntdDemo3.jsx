import React, { PureComponent } from 'react'
import { Table, Button, Pagination } from 'antd'
import './index.css'

export default class AntdDemo3 extends PureComponent {

  state = {
    current: 3,
  };

  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };


  render() {
    const columns = [
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: '性别',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
      },
      { title: '地址', dataIndex: 'address', key: '1' },
      { title: '学历', dataIndex: 'education', key: '2' },
      { title: '择友要求', dataIndex: 'req', key: '3' },
      { title: '婚否', dataIndex: 'ismarriage', key: '4' },
      { title: '专业', dataIndex: 'prossion', key: '5' },
      { title: '工作', dataIndex: 'worker', key: '6' },
      { title: 'Column 7', dataIndex: 'address', key: '7' },
      { title: 'Column 8', dataIndex: 'address', key: '8' },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 180,
        render: () =>( <div><Button>添加</Button> <Button>删除</Button></div>),
      },
    ];
    const data = [
      {
        key: '1',
        name: '二傻',
        age: 16,
        address: '玉林',
        education: '本科',
        req: '帅跟木瓜娃子一样',
        ismarriage: '单身可撩',
        worker: '在家耕田',
        prossion: '会计'
      },
      {
        key: '2',
        name: '大樊',
        age: 19,
        address: '来兵',
        education: '本科',
        req: '跟木瓜娃子一样可爱',
        ismarriage: '单身难撩',
        worker: '种地',
        prossion: '多媒体技术'
      },
    ]
    return (
      <div className="table">
        <Table pagination={false}  bordered columns={columns} dataSource={data} scroll={{ x: 1300 }} />
        <Pagination className="page" current={this.state.current} onChange={this.onChange} total={50} />
      </div>
    )
  }
}
