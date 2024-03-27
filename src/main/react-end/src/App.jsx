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
        <div className=" bg-[#1e3555] min-h-screen py-8">
            <div className="w-full bg-[#13294a] max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">ToDo App</h1>


                <div className="mb-4">
                    <TodoForm onTaskAdded={handleTaskAdded}/>
                </div>

                    <div className={"flex flex-wrap gap-y-3"}>

                        {tasks.map((todo) => (
                            <div key={todo.id}
                            className={'w-full'}>
                                <TodoItem todo={todo}/>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    );
}

export default App;
