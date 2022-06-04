import React from 'react';   
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './blockquotes.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0]; // Si data es verdadero devuelve su primera posición
    
    return (
    <div>
        <h1>BreakingBad Quotes</h1>

        {
            loading 
            ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
            :
                (
                    <div className='col-md-5'>
                        <blockquote className='blockquote'>
                            <p>{ quote }</p>
                            <footer className='blockquote-footer'>{ author }</footer>
                        </blockquote>
                        
                        <button onClick={ increment } className='btn btn-success'>
                            Siguiente frase → 
                        </button>  
                    </div>
                )
        }

    </div>
    )
}
