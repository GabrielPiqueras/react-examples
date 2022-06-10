import React from 'react'
import { TaskListItem } from './TaskListItem';

/**
 * 
 * @description : Muestra una lista de tareas recorriendo el objeto recibido de las mismas con un map() y pintando cada una 
 * como un componente <TaskListItem />, el cuál recibe el número que tendrá la tarea, la tarea actual recorrida
 * y las funciones de sus eventos (pasadas nuevamente).
 * 
 * @param {tasks} Objeto con las tareas almacenadas 
 * @param {handleDelete} Función del evento para eliminar tareas.
 * @param {handleToggle} Función del evento para completar o descompletar tareas.
 * 
 * @returns <ul>
 * 
 */

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
