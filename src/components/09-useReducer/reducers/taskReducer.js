
/**
 * @param {state}: Estado con las tareas que se usará en las acciones para devolver una copia del mismo sin mutarlo.
 * @param {action}: Acción ejecutada con dispatch()
 * 
 * @actions
 * 
 * add        ➡ Devuelve el estado actual junto a la nueva tarea añadida en el payload.
 * delete     ➡ Devuelve el estado actual sin la tarea recibida en el payload.
 * toggle     ➡ Devuelve el estado actual con la propiedad 'done' cambiada a true o false, de la tarea recibida en el payload.
 * toggle-odd ➡ Igual que toggle, pero con el código más extendido.
 * 
 * default    ➡ Devuelve el estado sin ningun cambio nuevo.
 * 
 * @nota No hacen falta breaks cuando tenemos un return, porque no alcanzan a ejecutarse.
 */

export const taskReducer = ( state = [], action ) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete': 
            return state.filter(task => task.id != action.payload);

        case 'toggle':
            return state.map(task =>
                (task.id === action.payload) 
                    ? {...task, done: !task.done}
                    : task
            );

        case 'toggle-old': 
           return state.map(task => {
               if (task.id === action.payload) {
                    return { ...task, done: !task.done }
               } else {
                    return task;
               }
           });
        default:
            return state
    }
} 
