import React, { useEffect, useState } from 'react';
import axios from "axios";

function TodoItem({todo,onUpdateTodo, onDeleteTodo}) {
    // const [tasks, setTasks] = useState([]);


    const [editMode, setEditMode] = useState(false);
    const [taskMsg, setTaskMsg] = useState(todo.tasks);
    const [isChecked, setIsChecked] = useState(todo.completed)


    const handleCheckBox = async() => {
        setIsChecked(!isChecked);

        try{
            const response = await axios.put(
                `http://localhost:8080/api/tasks/${todo.id}`,
                {
                    tasks: taskMsg,
                    completed: !isChecked
                });
            onUpdateTodo(response.data);
            console.log('Todo updated:', response.data);
        }catch (error){
            console.error('Error updating todo: ' , error);
        }

    }


    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo : todoMsg})
        setEditMode(false)
    }

    const handleToggleEditMode = () => {
        setEditMode(prevEditMode => !prevEditMode)
    }

    const handleUpdateTodo = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/tasks/${todo.id}`, { tasks: taskMsg,
                completed: false
            });
            console.log('Todo updated:', response.data);
            onUpdateTodo(response.data);
            setEditMode(false);
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };


    const deleteTodo = async () => {
        try{
            const response = await axios.delete(
                `http://localhost:8080/api/tasks/${todo.id}`
            )
            onDeleteTodo(todo.id);
            console.log('Todo deleted:', response.data);
        }catch (error){
            console.error("Error deleting todo: ", error);
        }

    }



    return (
        <div
            className={`border flex-border space-y-4 border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 space-x-1 ..." `}>

            <input type="checkbox"
                   className='cursor-pointer'
                   checked={isChecked}
                   onChange={handleCheckBox}
                   title={isChecked ? "Uncheck the Task" : "Mark as Completed"}
            />

            <input type="text"
                   className={` outline-none w-10/12 bg-transparent rounded-lg text-cyan-400 text-center font-semibold font-sans
            ${setEditMode ? "border-black/10 px-2" : "border-transparent"} {${todo.completed ? " line-through" : ""}`}
                   onChange={(e) => setTaskMsg(e.target.value)}
                   value={taskMsg}
                   readOnly={!editMode}
            />

            <button
                className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-green-700 hover:bg-green-500 shrink-0 disabled:opacity-50
                ${todo.completed ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={!editMode ? handleToggleEditMode : handleUpdateTodo}
                disabled={todo.completed}
                title={editMode ? "Save Task" : "Edit Task"}
            >{editMode ? "💾" : "✏️"}</button>

            <button
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-red-900 hover:bg-red-800 shrink-0'
                onClick={deleteTodo}
                title={"Delete Task"}
            >❌
            </button>


        </div>
    );
}

export default TodoItem;
