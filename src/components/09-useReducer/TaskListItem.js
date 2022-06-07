import React from 'react'

export const TaskListItem = ({ num, task, handleDelete, handleToggle }) => {

    const { id, desc, done } = task;
    /* Manejadores de eventos */

    return (
        <li
            key={ id }
            className='list-group-item'
        >
            <p
                className={`${done && 'complete'}`}
                onClick={ () => handleToggle(id) }
            >
                { num + 1 }. { desc }
            </p>
            <button onClick={ () => handleDelete(id) } className='btn btn-danger'>
                ❌
            </button>
        </li>
    )
}
