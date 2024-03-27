import React, { useState } from 'react';
import axios from 'axios';

function TodoForm({ onTaskAdded }) {
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/tasks', { tasks: task });
            console.log(response.data)
            onTaskAdded(response.data);
            setTask('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task.."
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TodoForm;
