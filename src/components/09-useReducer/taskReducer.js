

export const taskReducer = ( state = [], action ) => {

    /* No hace falta breaks cuando tenemos un return, porque no alcanzan a ejecutarse */
    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete': 
            let newState = [...state];
            let index = newState.findIndex(task => task.id == action.payload);
            
            newState.splice(index, 1);
            return newState;

        case 'complete': 
            let newState2 = [...state];
            let index2 = newState.findIndex(task => task.id == action.payload);
            
            newState2[index2].done = true;
           
            console.log(newState2);
            return newState2;
    
        default:
            return state
    }
} 
