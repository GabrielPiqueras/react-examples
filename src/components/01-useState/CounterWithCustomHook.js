import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter( 0 );

  return (
    <>
        <h1>Counter with Hook: { counter }</h1>

        <hr />

        {/* Por defecto, sin argumentos se le está pasando el evento del ratón */}
        {/* <button onClick={ increment } className='btn'>+1</button> */}

        {/* Por tanto, para evitar el evento, debemos ejecutar una función que 
        ejecute nuestra función de incrementar o incrementar, pasando el argumento */}
        <button onClick={ increment } className='btn btn-success'>+1</button>
        <button onClick={ reset } className='btn btn-info'>Reset</button>
        <button onClick={ decrement } className='btn btn-danger'>-1</button>
    </>
  )
}
