import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';

import './styles.css';

function Todos({ todos, removeTodo }) {

    return todos.map((todo, index) => (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided) => (
                <div key={todo.id.toString()}
                    className="listContainer"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>

                    <div className="listTitle">
                        <div className="sortIcon">
                            <AiOutlineMenu />
                        </div>
                        <div>
                            {todo.text}
                        </div>


                    </div>
                    <div className="removeIcon">
                        <MdDeleteForever onClick={() => removeTodo(todo.id)} />
                    </div>
                </div>
            )}
        </Draggable>
    ))
}

export default Todos;