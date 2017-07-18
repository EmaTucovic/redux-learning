import React from 'react';
import PropTypes from 'prop-types';


export default function Todo({text, completed, onClick}){

    return (
        <li onClick = {onClick} 
            style={{
                textDecoration: completed ? 'line-through' : 'none'
                }}
        >
            {text}
        </li>
    );
}

Todo.PropTypes = {
    onClick : PropTypes.func.isRequired,
    completed : PropTypes.bool.isRequired,
    text : PropTypes.string.isRequired
};