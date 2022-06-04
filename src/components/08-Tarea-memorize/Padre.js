import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import './tarea.css';

export const Padre = () => {

    /* Tarea: Evitar que se vuelvan a renderizar los componentes hijos por cada vez que cambia el estado */

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    /* La función se ejecuta siempre que se hace click en un botón, lo que cambia es que no se renderiza de nuevo
    hasta que setValor cambia */
    const incrementar = useCallback( (num) => {
        setValor( v => v + num );
    }, [ setValor ]);


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
