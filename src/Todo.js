import React from 'react';
import { ACTIONS } from './App.js';

const Todo = ({ todo, dispatch }) => {
    const { id, name, complete } = todo;
    return (
        <div className='d-flex align-items-center justify-content-between py-1'>
            <li style={complete ? { color: '#AAA', textDecoration: 'line-through' } : { color: '#000' }}>{name}</li>
            <div className='d-flex align-items-center'>
                <div className='mx-1'>
                    <input type="checkbox" name='done' id='done' className='text-success' style={{ cursor: 'pointer' }} onChange={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } })} />
                    <label htmlFor="done" className='text-success' style={{ cursor: 'pointer' }}>Done</label>
                </div>
                <button className="btn btn-outline-danger" onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } })} >Delete</button>
            </div>
        </div>
    );
};

export default Todo;