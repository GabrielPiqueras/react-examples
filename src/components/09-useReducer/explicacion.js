// const [state, dispatch] = useReducer(funcionReducer, estadoInicial, inicializarState)

/* Propiedades a extraer */
/* 
   state: El estado
   dispatch: Es lo que usaremos para pasar acciones a nuestro reducer
             Cuando hagamos eso y el estado cambie, React sabrá que tiene que volver
             a renderizar el componente.

             Podríamos incluso, mandar ese dispatch a otros componentes hijos y sabrá que son acciones que se aplicarán
             al reducer usado en el componente padre, porque al usar el useReducer(), enlazamos el dispatch a
             la función reducer que nos interesa.
*/

/* Parámetros */
/* 1. first: Función reducer a usar
   2. second: Estado inicial
   3. third: Init. Usado como una función para inicializar el estado en caso de que
             dicho estado sea procesado o haga varias acciones. 
             Cada vez que el componente se vuelva a re-dibujar o se vuelva a ejecutar esa acción entonces
             al ser una función que está externa al componente, lo hace más ligero y rápido

             Incluso podría memorizar ese resultado para no tener que volverlo a ejecutar.
*/ 
