import React, { useEffect, useState } from 'react';

function TodoItem({todo}) {
    // const [tasks, setTasks] = useState([]);

    return (
        <div className={`flex-border space-y-4 border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black`}>

            <input type="text"
                   className={`outline-none w-full bg-transparent rounded-lg text-cyan-400 font-semibold italic`}
                   value={todo.tasks}
                   readOnly={true}
            />

        </div>
    );
}

export default TodoItem;
