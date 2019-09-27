import React from 'react';
import './index.css';
import { avatarMap } from '../const'
import store from './../store';

// 1.数组分类
// 2.减少标签嵌套
// 3.事件名
// 4.嵌套，点击事件
class List extends React.Component {

  displayClick = data => () => {
    this.props.onItemClick(data);
  }

  renderMemberList(memberData) {
    return (
        <div className='list-container'>
          {
            memberData.map((ele, index) => (
              <div onClick={this.displayClick(ele)} key={index}>
                <ItemInfo data={ele}></ItemInfo>
              </div>
            ))
          }
        </div>
    )
  }
  render() {
    const list = store.groupByRole(this.props.dataList);
    return(
         Object.keys(list).map((item, index) => (
            <div key={index}>
              <p className='admin-title'>{item}</p>
              {this.renderMemberList(list[item])}
          </div>
         ))
    )
  }
}

class ItemInfo extends React.Component {
  render() {
    const {image, name, role, team} = this.props.data;
    return (
      <div className='item-con'>
        <img className='item-img' src={avatarMap[image]} alt=""/>
        <div className='item-right'>
          <p className='item-name'>{name}</p>
          <p className='item-role'>{role}</p>
          <p className='item-team'>{team}</p>
        </div>
      </div>
    )
  }
}

export default List;
