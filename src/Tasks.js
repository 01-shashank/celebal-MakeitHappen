import React from 'react'
import "./Tasks.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Tasks() {
  return (
    <div className="tasks">
        <AccountCircleIcon fontSize='large'/>
        <div className="tasks__info">
            <h4>Shashank
                <span className='tasks__timestamp'>
                There is your tasks timestamps
                </span>
            </h4>
            <p>This is the task</p>
        </div>
    </div>
  )
}

export default Tasks