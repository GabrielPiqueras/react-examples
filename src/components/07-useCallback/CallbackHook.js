import React, { useCallback, useState } from 'react';

import './callback.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    /* Este custom hook tiene 2 casos de uso principales:

        1. Cuando necesitamos mandar una función a un componente hijo. Es decir,
           establecer una comunicación entre sí.
           
           Es conveniente que el componente hijo esté "memorizado" con React.memo()
           
           Si no lo mandamos con useCallback() siempre lo va a estar generando
           porque la función se va a construir otra vez en el componente padre */

    /* 2. Cuando la función es una dependencia en un useEffect()

    const increment = () => {
        setCounter( counter + 1);
    }

    useEffect(() => {
        // código a ejecutar
    } [ increment ]);

    Como la función se vuelve a construir en cada renderización del componente
    El código del efecto se dispararía siempre que se renderiza. 

    Por eso, debemos de convertir la función normal en una con useCallback()

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [ setCounter ]);

    useEffect(() => {
        // código a ejecutar
    } [ increment ]);

    Y ya funcionaría bien.

    */

    

    const [ counter, setCounter ] = useState(10);

    /* Aunque usemos React.memo() en el componente hijo para evitar que lo renderice...
       No funcionará, porque en cada renderización esta función "revive" en un nuevo espacio
       de memoria, así que no sirve hacer eso */
    // const increment = () => {
    //     setCounter( counter + 1);
    // }

    /* Por tanto, podemos usar el hook useCallback()
       El cuál reemplazará a la función de arriba y meteremos dentro el código de la misma
       
       Básicamente, useCallback() devolverá una versión memorizada de la función de arriba 
       Que me servirá para mandarla como argumentos en otros lugares de React, y comprobará
       si la función ha cambiado según si ha cambiado la/s dependencia/s que le digamos */
       
    // const increment = useCallback(() => {
    //     setCounter(counter + 1);
    // }, [ setCounter, counter ]);

    /* Solo necesitamos la dependencia setCounter, porque si ponemos counter... 
       la dependencia estaría cambiando siempre... y no resolveríamos nada.
       
       Por tanto, hay un truco que es recibir el valor del 'state' por parámetro e
       incrementarlo de esta forma, así no cambiaria siempre la dependencia 'counter' 
       */

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [ setCounter ]);

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}
