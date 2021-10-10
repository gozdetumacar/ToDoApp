import React, { useState } from 'react';
import TodoInput from '../TodoInput';
import Todos from '../Todos';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function TodoList() {

    const [todos, setTodos] = useState([]);
    //const [items, setItems] = useState(todos);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }

    const removeTodo = id => {
        const remove = [...todos].filter(todo => todo.id !== id)
        setTodos(remove);
    }

    const handleOnDragEnd = (result) => {
        const { source, destination, draggableId } = result;

        console.log(result);

        if (destination) return;

        if (destination.index === source.index) return;

        const t = todos.filter(todo => todo.id === draggableId)[0]

        const newTodos = [...todos];
        newTodos.splice(source.index, 1);
        newTodos.splice(destination.index, 0, t);
        setTodos(newTodos);

        // const newItems = [...items];
        // const [removed] = newItems.splice(result.source.index, 1);
        // newItems.splice(result.destination.index, 0, removed);
        // setItems(newItems);
    }

    return (
        <div >
            <TodoInput onSubmit={addTodo} />
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='todolist'>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <Todos todos={todos} removeTodo={removeTodo} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default TodoList;
