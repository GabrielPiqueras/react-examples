import React, { useRef } from 'react';
import './FocusScreen.css';

export const FocusScreen = () => {

    // El hook nos permite cambiar a lo que apunta esta variable sin necesidad
    // de disparar una renderización nuevamente en la parte de React

    // En resumen, es una variable que puede cambiar.
    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
        console.log(inputRef);
    }
    
    return (
        <div>
            <h1>Focus Screen</h1>
            <input
                ref={inputRef}
                className='form-control'
                placeholder='Su nombre'
            />

            <button onClick={ handleClick } className='btn btn-outline-primary mt-5'>
                Poner Focus
            </button>
        </div>
    )
}
