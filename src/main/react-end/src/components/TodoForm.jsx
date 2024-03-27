import {useState} from "react";
import axios from "axios";


function TodoForm({onTaskAdded}){

    const [task, setTask] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:8080/api/tasks',{tasks: task})
            const newTask = response.data;
            onTaskAdded(newTask);
            setTask('')
        }catch (error){
            console.error("error adding tasks : " , error)
        }

    };


    return(
        <form onSubmit={handleSubmit} className='flex'>
            <input type="text"
            placeholder="Write Todo..."
            className="w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />

            <button type="submit"
             className='rounded-r-lg px-3 py-1 bg-cyan-600 text-white shrink-0'>
                Add
            </button>

        </form>
    )


}

export default TodoForm ;