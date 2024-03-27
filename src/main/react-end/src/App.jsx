import React, {useEffect, useState} from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import axios from "axios";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);


    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]); // Update state with new task
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <TodoForm onTaskAdded={handleTaskAdded} />
            {tasks.map((todo) => (
                <div key={todo.id}>
                    <TodoItem todo={todo} />
                </div>
            ))}
        </div>
    );
}

export default App;
