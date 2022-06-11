import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

  const user = {
    id: 1462,
    name: 'Gabriel',
    email: 'gabriel@hotmail.com'
  }

  return (
    <div>
      <UserContext.Provider value={ user }>
        <AppRouter />
      </UserContext.Provider>
    </div>
  )
}
