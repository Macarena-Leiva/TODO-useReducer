export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [ ...state, action.payload]   
        
        case 'delete':        //todo.id sea dif al todo.id que quiero borrar osea al action.payload
            return state.filter( todo => todo.id !== action.payload)//me va a regresar un nuevo arreglo con todos los elementos que cumplan una condicion
    
        case 'toggle':
            return state.map(todo => //return implicito
                (todo.id === action.payload) ? { ...todo, done: !todo.done} : todo
            );                                  //modficacion del todo

        default:
            return state;
    }
}