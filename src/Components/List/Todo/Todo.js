import React from 'react';


const todo = (props) => {
    const classes = `todo-item ${props.completed? 'completed' : ''}`

    return (
        <div className='todo'>
            <li className={classes}>{props.content}</li>
            <button className='complete-btn' onClick={props.setComplete}>
                <i className="fas fa-check-square "></i>
            </button>
            <button className='trash-btn' onClick={props.delete}>
                <i className="fas fa-trash "></i>
            </button>
        </div>
    );
}

export default todo;