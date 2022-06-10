
import React, { useReducer, useEffect } from 'react'
import { taskReducer } from './reducers/taskReducer';
import { TaskList } from './components/TaskList';
import { TaskAdd } from './components/TaskAdd';
import './css/styles.css';

export const TasksApp = () => {

    // Obtener tareas guardadas en localStorage, si el array recibido es 'null' será un array vacío
    const init = () => {
        const tasks = localStorage.getItem('tasks');
        return JSON.parse(tasks) || [];
    }
    
    /* Reducer
    *
    * tasks: Es el estado que guarda las tareas actuales recibidas del reducer.
    * dispatch: Función para ejecutar acciones sobre el reducer.
    * 
    */
    const [ tasks, dispatch ] = useReducer(taskReducer, [], init);

    // Guardo las tareas en localStorage cada vez que el estado (variable 'tasks') cambia.
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    /* Evento de los botones para eliminar.
     *
     * Ejecuta una acción tipo 'delete' en el reducer enviando el id de la tarea.
     * El reducer devuelve el objeto tareas, pero sin la tarea indicada por el taskId, como si se hubiera eliminado.
     * 
     * */
    const handleDelete = (taskId) => {
        dispatch({
            type: 'delete',
            payload: taskId
        });
    }

    /* Evento para completar o "descompletar" una tarea.
     *
     * Ejecuta una acción tipo 'toggle' en el reducer enviando el id de la tarea.
     * El reducer devuelve el objeto tareas, pero con la propiedad 'done' negada, para invertir su valor booleano.
     * 
     * */
    const handleToggle = (taskId) => {
        dispatch({
            type: 'toggle',
            payload: taskId
        });
    }

    /* Evento para añadir una nueva tarea.
     *
     * Ejecuta una acción tipo 'add' en el reducer enviando el id de la tarea.
     * El reducer devuelve el objeto tareas, pero añadiendo la nueva recibida por parámetro.
     * 
     * */
    const handleAddTask = (newTask) => {
        dispatch({
            type: 'add',
            payload: newTask
        });
    }
    
    /* Renderización del componente principal.
     *
     * Se muestra el número de tareas en un h1.
     * 
     * El componente <TaskList /> muestra una lista <ul> con las tareas.
     * 
     * A su vez, está formado por componentes <TaskListItem />, uno para cada tarea de la lista.
     * 
     * <TaskList /> recibe el objeto tareas y las funciones de los eventos para 'eliminar o 'completar' tareas
     * para poder aplicarlos en los <TaskListItem />.
     * 
     * El componente <TaskAdd /> es un formulario, que permite añadir nuevas tareas.
     * Recibe el evento de 'añadir' tareas para 
     * */
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
