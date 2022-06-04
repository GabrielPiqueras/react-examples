
import React, { useReducer, useEffect, useRef } from 'react'
import { taskReducer } from './taskReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

export const TasksApp = () => {

    const inputDescription = useRef();

    const init = () => {
        const tasks = localStorage.getItem('tasks');
        return JSON.parse(tasks) || [];
    }

    const [ tasks, dispatch ] = useReducer(taskReducer, [], init);

    /* Guardando datos del formulario */
    const [ values, handleInputChange, resetForm ] = useForm({description: ''});
    const { description } = values;

    /* Guardando tareas en localStorage */
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])
    
    /* Manejadores de eventos */

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        } 

        const newTask = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTask
        }

        dispatch(action);

        resetForm();
        inputDescription.current.focus();
    }

    const handleClickDelete = (e) => {

        const action = {
            type: 'delete',
            payload: e.target.value
        }

        dispatch(action);
    }

    const handleClickComplete = (e) => {

        const action = {
            type: 'complete',
            payload: e.target.value
        }

        dispatch(action);
    }

    // const [state, dispatch] = useReducer(funcionReducer, estadoInicial, inicializarState)

    /* Propiedades a extraer */
    /* 
       state: El estado
       dispatch: Es lo que usaremos para pasar acciones a nuestro reducer
                 Cuando hagamos eso y el estado cambie, React sabrá que tiene que volver
                 a renderizar el componente.

                 Podríamos incluso, mandar ese dispatch a otros componentes hijos y sabrá que son acciones que se aplicarán
                 al reducer usado en el componente padre, porque al usar el useReducer(), enlazamos el dispatch a
                 la función reducer que nos interesa.
    */

    /* Parámetros */
    /* 1. first: Función reducer a usar
       2. second: Estado inicial
       3. third: Init. Usado como una función para inicializar el estado en caso de que
                 dicho estado sea procesado o haga varias acciones. 
                 Cada vez que el componente se vuelva a re-dibujar o se vuelva a ejecutar esa acción entonces
                 al ser una función que está externa al componente, lo hace más ligero y rápido

                 Incluso podría memorizar ese resultado para no tener que volverlo a ejecutar.
    */ 

    return (
        <div>
            <h1>Tasks App <span className='counter'>({tasks.length})</span></h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <h4> Lista </h4>
                    <hr />

                    <ul className='list-group list-group-flush'>
                        {
                            tasks.map((task, i) => 
                                <li key={ task.id } className='list-group-item'>
                                    <p className='text-center'>
                                        {i + 1}. { task.desc }
                                    </p>
                                    <button
                                        value={ task.id }
                                        className='btn btn-danger'
                                        onClick={ handleClickDelete }
                                    >
                                        ❌
                                    </button>

                                    {/* <button
                                        value={ task.id }
                                        className='btn btn-success'
                                        onClick={ handleClickComplete }
                                    >
                                        ✅
                                    </button> */}
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className='col-5'>
                    <h4> Agregar item </h4>
                    <hr />

                    <form>
                        <input
                            type='text'
                            id='description'
                            name='description'
                            value={ description }
                            ref={ inputDescription }
                            onChange={ handleInputChange }
                            className='form-control'
                            placeholder='Aprender...'
                            autoComplete='off'
                        />

                        <button
                            type='submit'
                            className='col-12 btn btn-primary mt-3'
                            onClick={ handleSubmit }
                        >
                            ➕
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
