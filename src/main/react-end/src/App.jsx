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


    // display new task along with previous tasks
    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]); // Update state with new task
    };

    const handleTaskUpdated = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    };

    const handleTasksDeleted = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <div className=" bg-[#1e3555] min-h-screen py-8">
            <div className="w-full bg-[#13294a] w-5/12 mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-orange-300">ToDo App</h1>


                <div className="mb-4">
                    <TodoForm onTaskAdded={handleTaskAdded}/>
                </div>

                    <div className={"flex flex-wrap gap-y-3"}>

                        {tasks.map((todo) => (
                            <div key={todo.id}
                            className={'w-full'}>
                                <TodoItem todo={todo}
                                onUpdateTodo={handleTaskUpdated}
                                onDeleteTodo={handleTasksDeleted}/>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    );
}

export default App;
