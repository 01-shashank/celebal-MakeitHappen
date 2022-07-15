import React from 'react'
import './TodoHeader.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
function TodoHeader() {
  return (
    <div className="TodoHeader">
        <div className="todoHeader__left">
            <h3>
                <span className="todoHeader__hash">
                    #
                </span>
                Shashank
            </h3>
        </div>
        <div className="todoHeader__right">
            <CircleNotificationsIcon fontSize='large'/>
            <AccountCircleIcon fontSize='large'/>
        </div>
    </div>
  )
}

export default TodoHeader