import React, { useRef } from 'react'
import { useForm } from '../../../hooks/useForm';

export const TaskAdd = ({ handleAddTask }) => {

  // Referencia al input de la descripción
  const inputDescription = useRef();
  
  // Guardando datos del formulario usando el hook useForm()
  const [ values, handleInputChange, resetForm ] = useForm({description: ''});
  const { description } = values;
  
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

    handleAddTask(newTask);

    resetForm();
    inputDescription.current.focus();
  }

  return (
    <>
      <h4> Agregar item </h4>
      <hr />

      <form onSubmit={ handleSubmit }>
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

        <button type='submit' onClick={ handleSubmit } className='col-12 btn btn-primary mt-3'>
          ➕
        </button>
      </form>
    </>
  )
}
