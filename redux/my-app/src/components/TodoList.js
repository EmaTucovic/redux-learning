import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';


export default function TodoList({todos, onTodoClick}){
    console.log(todos);
    if(todos)
    return (
        <ul>
            {todos.map( (item) => 
                <Todo 
                    key = {item.id}
                    text = {item.text}
                    completed = {item.completed}
                    onClick = { () => {onTodoClick(item.id)} }
                />
                )}
        </ul>
    );
    return (<div> hi </div>);
}

Todo.PropTypes = {
    todos : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            completed : PropTypes.bool.isRequired,
            text : PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick : PropTypes.func.isRequired
   
};