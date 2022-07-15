import React from 'react'
import "./Todo.css";
import TodoHeader from './TodoHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Tasks from './Tasks';
function Todo() {
  return (
    <div className="todo">
        <TodoHeader/>
        <div className="todo_lists">
          <Tasks/>
          <Tasks/>
        </div>
        <div className="todo__input">
          <AddCircleIcon fontSize="large"/>
          <form>
            <input placeholder={'Whats to be done?'}/>
            <button className="todo__inputButton" type="submit">
            Add Task!
            </button>
        </form>
        </div>
    </div>
  )
}

export default Todo