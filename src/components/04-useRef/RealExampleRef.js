import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import './FocusScreen.css';

export const RealExampleRef = () => {

    const [ show, setShow ] = useState(false);

    /* 
       Al desmontar el componente, si tenemos una petición cargando datos y no ha terminado...
       y entonces el usuario CORTA ese proceso, haciendo que se desmonte el componente...
       si por casualidad tras esa petición se cambiaba el estado de dicho componente o hook...
       como ya no existe el componente, pues dará error.
    */

    /*
        Es algo que debemos evitar porque esto conlleva a tener fugas de memoria y otros problemas
    */

    /* El error:
       Warning: Can't perform a React state update on an unmounted component.
       This is a no-op, but it indicates a memory leak in your application.
       To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

       Nos está pidiendo que cancelemos dichas suscripciones o que no llamemos al setState()
       si el componente ya no existe...
    */    

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={ () => setShow(!show) }
            >
                Show / Hide
            </button>
            
            { show && <MultipleCustomHooks /> }
        </div>
    )
}
