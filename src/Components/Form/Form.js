import React from 'react';

const form = (props) => {
    return (
        <form>
          <input 
            value={props.displayedText}
            type='text' 
            className='todo-input'
            onChange={props.setInputText}/>
          <button 
            className='todo-button' 
            type='button'
            onClick={props.addTodo}>
                <i className="fas fa-calendar-plus"></i>
          </button>
          {props.children}
        </form>


    /* <div className="select">
        <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
    </div> */
        
    )
}

export default form;