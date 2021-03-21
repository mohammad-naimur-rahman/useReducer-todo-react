import React, { useReducer, useState } from 'react';
import Todo from './Todo';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

const App = () => {

    const reducer = (todos, action) => {
        switch (action.type) {
            case ACTIONS.ADD_TODO:
                return [...todos, newTodo(action.payload.name)]
            case ACTIONS.TOGGLE_TODO:
                return todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, complete: !todo.complete }
                    }
                    return todo;
                })
            case ACTIONS.DELETE_TODO:
                return todos.filter(todo => todo.id !== action.payload.id)
            default:
                return todos;
        }
    }

    const newTodo = (name) => {
        return {
            id: Date.now(),
            name: name,
            complete: false
        }
    }
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('');
    }

    return (
        <div className='p-5 m-5 shadow-lg mx-auto' style={{ maxWidth: '600px' }}>
            <form onSubmit={handleSubmit}>
                <h5 className='py-2 text-primary'>Todo list using useReducer</h5>
                <input className='form-control' type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Add a task to do' />
            </form>
            <ol className='pt-3'>
                {
                    todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)
                }
            </ol>
        </div>
    );
};

export default App;