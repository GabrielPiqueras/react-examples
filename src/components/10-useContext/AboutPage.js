import React from 'react'
import { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutPage = () => {
  
  const userContext = useContext(UserContext);
  const { user } = userContext;
  
  return (
    <div>
        <h1>AboutPage</h1>
        <hr />

        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>
    </div>
  )
}
