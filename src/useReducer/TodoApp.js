import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';

// estado inicial de mi app
const initialState = [{
    id : new Date().getTime(),
    desc: 'Aprender Reduce',
    done: false
}];

export const TodoApp = () => {
//el dispach me va a ayudar a disparar las acciones hacia mi reducer
    const [todos, dispatch] = useReducer(todoReducer, initialState) 
    console.log(todos);

const handleSubmit = (e) =>{ //se envia el submit del form
    e.preventDefault();

    const newTodo = { //creamos un nuevo TODO
        id : new Date().getTime(),
        desc: 'Nueva tarea',
        done: false
    };

    const action = { //metemos ese TODO en una accion
        type: 'add', // la accion tiene un type que tiene que conocerlo mi reducer que me regresa un nuevo estado
        payload: newTodo
    }

    dispatch(action); // y mandamos esa accion mediante el dispatch
}

  return (
    <div>           
        <h1>TodoApp ({todos.length}) </h1>
        <hr/>
        <ul>{           // i (indice) para poner el num de la tarea
             todos.map((todo, i) => (
                <li key={todo.id}>
                <p>{i + 1} {todo.desc}</p>   
                <button>BORRAR</button>
                </li>
             ))
            }
        </ul>

        <h4>Agregar TODO</h4>
        <hr/>

        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name= 'description'
                placeholder='Aprender ...'
            />

            <button type='submit'>AGREGAR</button>
        </form>
    </div>
  )
}
