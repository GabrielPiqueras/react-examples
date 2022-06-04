import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import './Memorize.css';

export const Memorize = () => {

    /* Ejemplo de uso de la función memo() en el componente <Small />
    para evitar renderizaciones innecesarias (mirar el componente) */ 
    
    /* Debe renderizarse al ser llamado por el botón +1, Pero NO cuando cambia el estado
       de este componente y se dispara toda la renderización otra vez */
    const [ show, setShow ] = useState(true);
    const { counter, increment } = useCounter(10);

    return (
    <div>
        <h1>Counter: <Small value={ counter }/></h1>
        <hr />

        <button onClick={ increment } className='btn btn-primary'>
            +1
        </button>

        <button onClick={() => setShow(!show) } className='btn btn-outline-primary m-3'>
            Show / hide { JSON.stringify(show) }
        </button>
    </div>
    )
}
