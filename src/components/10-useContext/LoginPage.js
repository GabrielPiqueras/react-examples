import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginPage = () => {

  const userContext = useContext(UserContext);

  return (
    <div>
        <h1>LoginPage</h1>
        <hr />

        <h2>Objeto usuario compartido:</h2>
        <pre>
          { JSON.stringify(userContext)}
        </pre>
    </div>
  )
}
