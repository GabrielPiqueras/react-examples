
import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './form.css';

export const FormWithCustomHook = () => {

  const [ values, handleInputChange ] = useForm({
      name: '',
      email: '',
      password: ''
  });
  
  const { name, email, password } = values;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('Valores del formulario:');
    console.log(values);
  }

  useEffect(() => {
    console.log('El email cambió.')
  }, [email]);

  return (
    <>
        <h1>FormWithCustomHook</h1>
        <hr />

        <form onSubmit={ handleFormSubmit }>
            <div className='form-group'> 
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    defaultValue={ name } 
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-group'> 
                <input
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete='off'
                    defaultValue={ email } 
                    onChange={ handleInputChange }
                />
            </div>
            
            <div className='form-group'> 
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='******'
                    autoComplete='off'
                    defaultValue={ password } 
                    onChange={ handleInputChange }
                />
            </div>     

            <button type='submit' className='btn btn-primary'>
                Enviar
            </button>
        </form> 
    </>
  )
}