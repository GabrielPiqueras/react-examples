import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginPage = () => {
  
  const userContext = useContext(UserContext);
  const { user, setUser } = userContext;

  const iniciarSesion = () => {
    // Supongamos que inicia sesión el usuario y recibo sus datos en un objeto
    const loginUser = {
      id: 1572,
      name: 'Gabriel',
      email: 'gabriel@hotmail.com'
    }

    setUser(loginUser);
  }

  const cerrarSesion = () => {
    // Limpiamos el estado
    setUser({});
  }

  return (
    <div>
        <h1>LoginPage</h1>
        <hr />

        <button className='btn btn-info' disabled={Object.keys(user).length > 0} onClick={ () => iniciarSesion() }>
          Iniciar sesión
        </button>

        <button className='btn btn-danger' disabled={Object.keys(user).length === 0} onClick={ () => cerrarSesion() }>
          Cerrar sesión
        </button>

        <h2>Objeto usuario compartido:</h2>
        <pre>
          { JSON.stringify(user, null, 3)}
        </pre>
    </div>
  )
}
