import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { MdDeleteForever } from 'react-icons/md';
import './styles.css';

function Todos({ todos, completeTodo, removeTodo }) {

    const onDragEnd = (result) => {
        console.log(result)
    }

    return todos.map((todo, index) => (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='123456'>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        <Draggable draggableId={todo.id.toString()} index={index}>
                            {(provided) => (
                                <div
                                    key={todo.id.toString()}
                                    className="listContainer"
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                >
                                    <div id="list" className="listTitle" key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
                                    <div className="removeIcon">
                <MdDeleteForever onClick={() => removeTodo(todo.id)} />
            </div>
                                </div>
                            )}

                        </Draggable>
                        {provided.placeholder}
                    </div>
                )}

            </Droppable>
        </DragDropContext>
    ))

}


export default Todos;