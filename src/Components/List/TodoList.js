import React from 'react';

import Todo from './Todo/Todo';



const todoList = (props) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {props.todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        content={todo.content}
                        delete={() => props.delete(todo.content)}
                        setComplete={() => props.setComplete(todo)}
                        completed={todo.completed}>
                    </Todo>
                ))}
            </ul>
        </div>
    )
}

export default todoList;
