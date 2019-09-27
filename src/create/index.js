import React from 'react';
import './index.css';
import { avatarMap } from '../const';

// 1.减少p标签
// 2.图片映射
// 3.select option
// 4.value onChange
// 5.option
class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.editInfo;
    }
  
    /* 关闭创建 */
    handleClose = () => {
       this.props.onClose();
    }

    /* 创建新用户 */
    handleAdd = () => {
        this.props.onSumbit(this.state);
    }

    handleChange = key => {
        return e => {
            this.setState({
                [key]: e.target.value
            })
        }
    }

    render() {
        const {image, name, email, address, team, role} = this.state;
       
        const roleList = ['Employee', 'Admin'];
        const teamList = ['Creative', 'Finance && Admin', 'Managerment'];
        return (
           <div className='create-con' >
                 <form className='create-list' target="nm_iframe" id='create-form'>
                        {/* image */}
                        <p className='form-title'>Profile image</p>
                        <select name="" className='select-image' value={image || 'andy' } onChange={this.handleChange('image')}>
                            {Object.keys(avatarMap).map(name => (<option value={name} key={name}>{name}</option>))}
                        </select>

                        {/* name */}
                        <p className='form-title'>Name</p>
                        <input type="text" className="form-control"  value={name || ''} placeholder="Enter name" onChange={this.handleChange('name')}/> 
                        
                        {/* email */}
                        <p className='form-title'>Email address</p>
                        <input type="email" className="form-control" value={email || ''} id="email" placeholder="Enter email" onChange={this.handleChange('email')}/> 
                        
                        {/* role */}
                        <p className='form-title'>Role</p>
                        <select name="" className='select-image' value={role || 'Admin'} onChange={this.handleChange('role')}>
                            {roleList.map(item => (<option value={item} key={item}>{item}</option>))}
                        </select>

                        {/* team */}
                        <p className='form-title'>Team</p>
                        <select name="" className='select-image' value={team || 'Creative'} onChange={this.handleChange('team')}>
                            {teamList.map(item => (<option value={item} key={item}>{item}</option>))}
                        </select>

                        {/* address */}
                        <p className='form-title'>Address</p>
                        <input type="text" className="form-control" value={address || ''} placeholder="Enter Address" onChange={this.handleChange('address')}/> 

                        {/* addBtn */}
                        <button className='add-btn' onClick={this.handleAdd}>ADD EMPLOYEE</button>

                        {/* closeBtn */}
                        <div className='btn-x' onClick={this.handleClose}>X</div>
                </form>
            </div>
        )
    }
}

export default Create;