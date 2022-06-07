import React from 'react'
import { TaskListItem } from './TaskListItem';

export const TaskList = ({ tasks, handleDelete, handleToggle }) => {

    return (
        <ul className='list-group list-group-flush'>
            {
                tasks.map((task, i) => 
                    <TaskListItem
                        key={ task.id }
                        num={ i }
                        task={ task }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                )
            }
        </ul>
    )
}
