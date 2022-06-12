import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {

  const userContext = useContext(UserContext);
  const { user } = userContext;
  // console.log(userContext); // Muestra nuestro objeto usuario desde el componente superior
  
  return (
    <div>
        <h1>HomePage</h1>

        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>
    </div>
  )
}
