
import React, { useReducer, useEffect } from 'react'
import { taskReducer } from './taskReducer';
import { TaskList } from './TaskList';
import { TaskAdd } from './TaskAdd';
import './styles.css';

export const TasksApp = () => {

    // Obtener tareas de localStorage 
    const init = () => {
        const tasks = localStorage.getItem('tasks');
        return JSON.parse(tasks) || [];
    }
    
    // Reducer
    const [ tasks, dispatch ] = useReducer(taskReducer, [], init);

    // Guardar tareas en localStorage cuando el objeto de las 'tareas' cambia
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    // Manejadores de eventos
    const handleDelete = (taskId) => {
        dispatch({
            type: 'delete',
            payload: taskId
        });
    }

    const handleToggle = (taskId) => {
        dispatch({
            type: 'toggle',
            payload: taskId
        });
    }

    const handleAddTask = (newTask) => {
        dispatch({
            type: 'add',
            payload: newTask
        });
    }
    
    return (
        <div>
            <h1>Tasks App <span className='counter'>({tasks.length})</span></h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <h4> Lista </h4>
                    <hr />

                    <TaskList
                        tasks={ tasks }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className='col-5'>
                    <TaskAdd
                        handleAddTask={ handleAddTask }
                    />
                </div>
            </div>
        </div>
    )
}
