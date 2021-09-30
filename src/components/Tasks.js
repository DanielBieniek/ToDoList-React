import { useHistory, useParams } from 'react-router-dom'
import { useState } from 'react';
import Task from './Task'
import NewTask from './NewTask'

const Tasks = ({ lists, setLists }) => {
    let history = useHistory();
    let { id } = useParams();
    let list = lists.filter((list) => list.id === parseInt(id))[0];
    let nextTaskId = list.task.length ? list.task[list.task.length - 1].id + 1 : 1;

    const [newTask, setNewTask] = useState({
        'id': nextTaskId,
        'name': '',
        'isDone': false
    });

    const handleChangeCheckbox = (listId, itemId) => {
        const tempList = lists.map(list => list.id === listId ? { ...list, task: list.task.map(item => item.id === itemId ? { ...item, isDone: !item.isDone } : item) } : list);
        setLists(tempList)
    }

    const handleChangeTaskName = (e, listId, itemId) => {
        const tempList = lists.map(list => list.id === listId ? { ...list, task: list.task.map(item => item.id === itemId ? { ...item, name: e.target.value } : item) } : list);
        setLists(tempList)
    }

    const handleChangeListName = (e, listId) => {
        const tempList = lists.map(list => list.id === listId ? { ...list, name: e.target.value } : list);
        setLists(tempList)
    }

    const handleDeleteTask = (listId, itemId) => {
        const tempList = lists.map(list => list.id === listId ? { ...list, task: list.task.filter(item => item.id !== itemId) } : list);
        setLists(tempList)
    }

    const handleAddTask = (e, listId) => {
        e.preventDefault();
        const tempList = lists.map(list => list.id === listId ? { ...list, task: list.task.concat(newTask) } : list)
        setLists(tempList);
        setNewTask({
            'id': ++nextTaskId,
            'name': '',
            'isDone': false
        });
    }

    const handleSaveList = () => {
        history.push("/list");
    }

    if (lists.findIndex((t) => t.id === parseInt(id)) < 0) {
        history.push("/");
    }

    return (
        <div className="Tasks">
            {lists.findIndex((list) => list.id === parseInt(id)) < 0 ? '' : <>
                <input onChange={(e) => handleChangeListName(e, list.id)} type="text" placeholder="List name" value={list.name} />
                <ul className="TaskList">
                    {list.task.map(item =>
                        <Task
                            item={item}
                            listId={list.id}
                            handleChangeCheckbox={handleChangeCheckbox}
                            handleChangeTaskName={handleChangeTaskName}
                            handleDeleteTask={handleDeleteTask}
                        />
                    )}
                    <NewTask
                        newTask={newTask}
                        listId={list.id}
                        handleAddTask={handleAddTask}
                        setNewTask={setNewTask}
                    />
                </ul>
                <div className="TaskNav">
                    <span></span>
                    <button onClick={handleSaveList} className="SaveList">SAVE</button>
                </div>
            </>}
        </div >
    )
}

export default Tasks