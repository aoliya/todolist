import React from 'react';
import './TodolistItem.css';


//todo is props
const TodoListItem = ({todo, deleteTodoItem}) => (
    <li className="list-group-item">
        <div className="row">
            <div className="col-10">{todo}</div>
            <div className="col-2" style={{textAlign: 'left'}}>
                <button className="btn btn-danger btn-sm" onClick={deleteTodoItem}>X
                </button>
            </div>
        </div>
    </li>
);

export default TodoListItem;