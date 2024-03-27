import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TodoItem({todo}) {
    const [tasks, setTasks] = useState([]);






    return (
        <div>
            <div key={todo.id}>
                <span>{todo.id} : {todo.tasks}</span>
            </div>
        </div>
    );
}

export default TodoItem;
