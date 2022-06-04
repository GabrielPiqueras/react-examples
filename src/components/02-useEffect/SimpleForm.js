
import React, { useEffect, useState } from 'react';
import './form.css';
import { Coords } from './Coords';

export const SimpleForm = () => {

  const [ formState, setFormState ] = useState({
      name: '',
      email: ''
  });

  const { name, email } = formState;

  const setInputValue = ({ target }) => {
    // target guarda tanto el nombre del 'name', como su valor.
    setFormState({
        ...formState,
        [target.name]: target.value
    });
  } 

  // El return del useEffect devuelve una función que se dispara cuando el componente
  // se desmonta o deja de existir 

  // Es una función que se ejecuta para hacer una limpieza (si es que fuera necesaria)
  // Una fase de limpieza


  useEffect(() => {
    // console.log('FormState cambió.')
  }, [formState]);

  useEffect(() => {
    // console.log('El nombre cambió.')
  }, [name]);

  useEffect(() => {
    // console.log('El email cambió.')
  }, [email]);

  return (
    <>
        <h1>SimpleForm</h1>
        <hr />

        <div className='form-group'> 
            <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                defaultValue={ name } 
                onChange={ setInputValue }
            />
            <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Tu email'
                autoComplete='off'
                defaultValue={ email } 
                onChange={ setInputValue }
            />
        </div>

        { (name === '123') && <Coords /> }
        
    </>
  )
}
