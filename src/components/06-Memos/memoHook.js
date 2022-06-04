import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

import './Memorize.css';

export const MemoHook = () => {

    const [ show, setShow ] = useState(true);
    const { counter, increment } = useCounter(1);

    const procesoPesado = ( iteracciones ) => {

        for (let i = 0; i<iteracciones; i++) {
            console.log('Ahí vamos.....');
        }
        return `${iteracciones} iteracciones realizadas`;
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(2000), [counter]);

    return (
    <div>
        <h1>MemoHook</h1>

        <p> { memoProcesoPesado } </p>

        <h3>Counter: <small>{ counter }</small></h3>
        <hr />

        <button onClick={ increment } className='btn btn-primary'>
            +1
        </button>

        <button onClick={() => setShow(!show) } className='btn btn-outline-primary m-3'>
            Show / hide ({ JSON.stringify(show) })
        </button>
    </div>
    )
}
