import React from 'react';

const selector = (props) => {
    return (
        <div className="select">
            <select name="todos" className="filter-todo" onChange={props.option}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}

export default selector;