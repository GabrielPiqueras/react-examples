import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volví a generar :( ');

    /* Parámetro 5 porque queremos incrementar de 5 en 5 */
    return (
        <div>
            <button
            className='btn btn-primary'
            onClick={() => increment(5)}
            >
                Incrementar
            </button>
        </div>
    )
})