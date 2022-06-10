
/* El estado será una lista de tareas */

const initialState = [{
    id: 1,
    task: 'Comprar pan',
    done: false
}];

const taskReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {
        return [...initialState, action.payload]
    }

    return state;
}

/* Inicializando la lista de tareas */
let tasks = taskReducer();
console.log(tasks);

/* Añadiendo una nueva tarea */

const newTask = {
    id: 2,
    task: 'Cocinar paella',
    done: false
}

const agregarAction = {
    type: 'agregar',
    payload: newTask
}

tasks = taskReducer(tasks, agregarAction);
console.log(tasks);
