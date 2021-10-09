import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

function Todos({ todos, completeTodo, removeTodo }) {


    return todos.map((todo, index) => (
        <div key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div>
                <MdDeleteForever onClick={() => removeTodo(todo.id)} />
            </div>
        </div>
    ))
}

export default Todos;
