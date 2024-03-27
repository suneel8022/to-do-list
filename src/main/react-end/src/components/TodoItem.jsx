import {useEffect, useState} from "react";
import axios from "axios";


function TodoItem(){
    const [task, setTask] = useState([]);

    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await axios.get('http://localhost:8080/api/tasks');
                // console.log(response.data)
                setTask(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }

        fetchTasks();
    }, []);

    return (
        <div className="flex-border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300
        text-black">

            <input type={`text`}
             className={`border outline-none w-full bg-transparent rounded-lg text-cyan-300`}
             value={task}
            />

        </div>
    )
}


export default TodoItem;