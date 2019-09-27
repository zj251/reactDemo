import React from 'react';
import './App.css';
import Alllist from './list';
import Create from './create';
import Info from './info';
import title from './img/affinityid-logo.svg';
import data from './const';

class App extends React.Component {

// 1.确定state的最小表示
// 2.方法名
// 3.新建和更改编辑分开写
  
  state = {
    dataList: data,
    showData: null,        // 点击编辑用户信息，显示用户信息
    editData: null,        // 点击编辑用户信息，所提交的用户信息
  }

  /* 搜索 */
  handleSearch = e => {
    const text = e.target.value;
    const newText = text.toLowerCase();
    const newDataList = data.filter(item => item.name.toLowerCase().indexOf(newText) !== -1)
   
    this.setState({
      dataList: newDataList
    });
  }

  /* 创建 */
  handleCreate = () => {
    this.setState({
      editData: {},
      showData: null,
    })
  }

  /* 关闭 */
  handleClose = () => {
    this.setState({
      editData: null
    })
  }

  /* 提交用户信息 */
  handleSumbit = (data)=> {
    // 1.change sumbit
    if(data.index) {
      const curList = this.state.dataList;
      const arrIndex = curList.findIndex(item => {
        return item.index === data.index
      })
      curList[arrIndex] = data; // prevState, currentState

      this.setState({
        dataList: curList,
        showData: null,
        editData: null
      })
    }
    // 2.add sumbit
    else {
      data.index = this.state.dataList.length + 1;
      this.setState({
        dataList: [...this.state.dataList, data],
        showData: null,
        editData: null
      })
    }
  }

  /* 点击用户显示信息 */
  handleShowItem = (e) => {
    this.setState({
      showData: e,
      editData: null
    })
  }
  
  /* 删除用户 */
  handleDel = (e) => {
    const curList = this.state.dataList.filter(item => item.name !== e.name);
    this.setState({
      dataList: curList,
      showData: null
    })
  }

  /* 修改用户信息 */
  handleEdit = (e) => {
    this.setState({
      editData: e,
      showData: null
    })
  }

  render() {
    return (
    <div className='container'>
      <div className='row'>
        <div className='list-con col-md-3 col-md-offset-3'>
          <img src={title} alt={title} className='img-title'/>

          {/* search */}
          <input type="text" className="form-control search-title"  placeholder="search:" onChange={this.handleSearch}/> 
          
          {/* list */}
          <Alllist dataList={this.state.dataList} onItemClick={this.handleShowItem}></Alllist>
        </div>
        
        <div className='create-box col-md-3'> 
          <div className='create-btn' onClick={this.handleCreate}>CREATE A NEW EMPLOYEE</div>

          {/* create */}
          {this.state.editData && <Create onClose={this.handleClose} editInfo={this.state.editData} onSumbit={this.handleSumbit}></Create>}

          {/* info */}
          {this.state.showData && <Info infoData={this.state.showData} onDel={this.handleDel} onEdit={this.handleEdit}></Info>}
        </div>
      </div>
    </div>
    );
  }
}

export default App;
