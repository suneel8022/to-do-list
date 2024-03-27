import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {TodoForm, TodoItem} from "./components/index.js";

function App() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await axios.get('http://localhost:8080/api/tasks');
                // console.log(response.data)
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }

        fetchTasks();
    }, []);

    // return (
    //     <div>
    //         <h1>Tasks:</h1>
    //         <ul>
    //             {tasks.map(task => (
    //                 <li key={task.id}>
    //                     <h1>{task.id} : {task.tasks}</h1>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );


    return (
    <div className=" bg-[#1e3555] min-h-screen py-8">
        <div className="w-full bg-[#13294a] max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">ToDo App</h1>

            <div className="mb-4">
                {/* Todo form goes here */}
                <TodoForm/>
            </div>

            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {tasks.map((todo) => (
                    <div key={todo.id}
                         className='w-full'
                    >
                        {todo.tasks}
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default App;
