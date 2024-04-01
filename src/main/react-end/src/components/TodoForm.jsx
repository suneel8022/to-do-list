import React, { useState } from 'react';
import axios from 'axios';

function TodoForm({ onTaskAdded }) {
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/tasks', { tasks: task });
            console.log(response.data) // log to the console
            onTaskAdded(response.data);
            setTask('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };






    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                value={task}
                className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task.."
            />
            <button type="submit"
                    className='rounded-r-lg px-3 py-1 bg-cyan-500 text-white shrink-0 hover:bg-cyan-600'
                >Add</button>
        </form>
    );
}

export default TodoForm;
