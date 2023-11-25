import { useState } from "react"

export default function Task({tasks, onAddTask, onDeleteTask}) {

    const [enteredTask,setEnteredTask] = useState('');

    const handleInputChange = (e) => {
        setEnteredTask(e.target.value);
    } 

    const handleClick = () => {
        onAddTask(enteredTask);
        setEnteredTask('');
    }

    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
        <div className="flex items-center gap-4 mb-8">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
            onChange={handleInputChange}
            value={enteredTask}
            />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
        {tasks.length === 0 && <p className="text-stone-800 mb-4">This project does not have any task yet.</p>}
        {tasks.length > 0 && (
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {
                    tasks.map((task) => {
                        return <li key={task.id} className="flex items-center justify-between my-4">
                            <span>{task.taskContent}</span>
                            <button className="text-stone-700 hover:text-red-500" onClick={() => onDeleteTask(task.id)}>Clear</button>
                        </li>
                    })
                }
            </ul>

        )}
    </section>
}