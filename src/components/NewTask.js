const NewTask = ({ newTask, listId, handleAddTask, setNewTask }) => {
    return (
        <li className="TaskElement">
            <form onSubmit={(e) => handleAddTask(e, listId)} >
                <input
                    id="addTaskCheckBox"
                    type="checkbox"
                    checked={newTask.isDone}
                    onChange={(e) => setNewTask({ ...newTask, isDone: !newTask.isDone })}
                />
                <input
                    id="addTaskText"
                    type="text"
                    placeholder="Task name"
                    value={newTask.name}
                    onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                    required
                />
                <button type="submit" className="AddTask">ADD</button>
            </form>
        </li>
    )
}

export default NewTask