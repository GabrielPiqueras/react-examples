import React, { useLayoutEffect, useRef, useState } from 'react';   
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './Layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0]; // Si data es verdadero devuelve su primera posición
    
    const [ boxSize, setBoxSize ] = useState({});
    const parrafo = useRef();

    useLayoutEffect(() => {
        setBoxSize(parrafo.current.getBoundingClientRect());
    }, [quote]);

    return (
    <div>
        <h1>useLayoutEffect</h1>

        <blockquote className='blockquote'>
            <p ref={ parrafo }>{ quote }</p>
        </blockquote>

        <pre>
            { JSON.stringify(boxSize) }
        </pre>

        <div className='col-md-5'>
            <button onClick={ increment } className='btn btn-success'>
                Siguiente frase → 
            </button>  
        </div>
    </div>
    )
}
