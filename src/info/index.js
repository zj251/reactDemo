import React from 'react';
import './index.css';
import editBtn from '../img/edit.svg';
import delBtn from '../img/del.svg';
import { avatarMap } from  '../const'

// 1.p标签
class Info extends React.Component {

    delInfo = () => {
        this.props.onDel(this.props.infoData);
    }

    editInfo = () => {
        this.props.onEdit(this.props.infoData);
    }

    render() {
        const data = this.props.infoData;
        return (
            <div className='info-con'>
                
                <p className='info-img'><img src={avatarMap[data.image]} alt=""/></p>
                <p className='info-name'>{data.name}</p>
                <p className='info-email'>{data.email}</p>

                <p className='info-edit-del'>
                    <img src={editBtn} alt="" className='info-edit' onClick={this.editInfo}/>
                    <img src={delBtn} alt=""  className='info-edit' onClick={this.delInfo}/>
                </p>

                <div className='der-line'></div>

                <div className='info-role-team'>
                    <div className='info-role'>
                        <p className='info-title'>Role</p>
                        <p className='info-words'>{data.role}</p>
                    </div>

                    <div className='info-team'>
                        <p className='info-title'>Team</p>
                        <p className='info-words'>{data.team}</p>
                    </div>
                </div>

                <div className='der-line'></div>
                <div className='info-role-team'>
                    <div className='info-role'>
                        <p className='info-title'>Address</p>
                        <p className='info-words'>{data.address}</p>
                    </div>
                    <div className='info-team'>
                        <p className='info-title'>City</p>
                        <p className='info-words'>{data.city}</p>
                    </div>
                </div>

                <button className='share-btn'>SHARE</button>
            </div>
        )
    }
}

export default Info;

