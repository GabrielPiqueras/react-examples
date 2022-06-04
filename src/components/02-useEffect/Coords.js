
import React, { useEffect, useState } from 'react'

export const Coords = () => {

    const [ coords, setCoords ] = useState({x:0, y:0});
    
    useEffect(() => {
        console.log('Componente montado.')
        
        const mouseMove = (e) => {
            setCoords({x: e.x, y: e.y});
        }

        window.addEventListener('mousemove', mouseMove);
    
        return () => {
            console.log('Componente desmontado.');
            window.removeEventListener('mousemove', mouseMove);
        }
      }, []);
  return (
    <>
        <h3>X: { coords.x }</h3>
        <h3>Y: { coords.y }</h3>
    </>
  )
}
