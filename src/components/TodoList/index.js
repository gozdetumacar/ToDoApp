import React, { useState } from 'react';
import TodoInput from '../TodoInput';
import Todos from '../Todos';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);

    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const removeTodo = id => {
        const remove = [...todos].filter(todo => todo.id !== id)

        setTodos(remove);
    }

    return (
        <div>
            <TodoInput onSubmit={addTodo} />
            <Todos todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
        </div>
    )
}

export default TodoList;
