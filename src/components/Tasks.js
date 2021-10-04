import { useHistory, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Task from './Task'
import NewTask from './NewTask'

const Tasks = ({ lists, setLists, auth }) => {
    let history = useHistory();
    let { id } = useParams();

    const [list, setList] = useState({
        'name': "",
        'task': [],
    });

    const [newTask, setNewTask] = useState({
        'id': 1,
        'name': '',
        'isDone': false
    });

    useEffect(() => {
        const readTask = async () => {
            let readTaskRequestResult = await fetch("https://recruitment.ultimate.systems/to-do-lists/" + id, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + auth,
                    "Accept": "application/json"
                }
            });
            readTaskRequestResult = await readTaskRequestResult.json();

            if (readTaskRequestResult.hasOwnProperty("id")) {
                setList({
                    'name': readTaskRequestResult.name,
                    'task': readTaskRequestResult.task
                });
                setNewTask({ ...newTask, id: readTaskRequestResult.task.length ? readTaskRequestResult.task[readTaskRequestResult.task.length - 1].id + 1 : 1 });
            }
        }
        (async () => await readTask())();
    }, [])

    const handleChangeListName = (e) => {
        const tempList = { ...list, name: e.target.value };
        setList(tempList);
    }

    const handleChangeCheckbox = (itemId) => {
        const tempList = { ...list, task: list.task.map(item => item.id === itemId ? { ...item, isDone: !item.isDone } : item) };
        setList(tempList);
    }

    const handleChangeTaskName = (e, itemId) => {
        const tempList = { ...list, task: list.task.map(item => item.id === itemId ? { ...item, name: e.target.value } : item) };
        setList(tempList);
    }


    const handleDeleteTask = (itemId) => {
        const tempList = { ...list, task: list.task.filter(item => item.id !== itemId) };
        setList(tempList);
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        const tempList = { ...list, task: list.task.concat(newTask) };
        setList(tempList);
        setNewTask({
            'id': newTask.id + 1,
            'name': '',
            'isDone': false
        });
    }

    const handleSaveList = async () => {

        const putListObject = {
            'name': list.name,
            'task': list.task.map(task => {
                return {
                    'name': task.name,
                    'isDone': task.isDone
                }
            })
        };

        let putListRequestResult = await fetch("https://recruitment.ultimate.systems/to-do-lists/" + id, {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer " + auth,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(putListObject)
        });
        putListRequestResult = await putListRequestResult.json();

        if (putListRequestResult.hasOwnProperty("id")) {
            history.push("/list");
        }
    }

    const handleCancel = () => {
        history.push("/list");
    }

    if (lists.findIndex((list) => list.id === parseInt(id)) < 0) {
        history.push("/");
    }

    return (
        <div className="Tasks">
            <input
                onChange={(e) => handleChangeListName(e)}
                type="text"
                placeholder="List name"
                value={list.name}
            />
            <ul className="TaskList">
                {list.task.map(item =>
                    <Task
                        key={item.id}
                        item={item}
                        handleChangeCheckbox={handleChangeCheckbox}
                        handleChangeTaskName={handleChangeTaskName}
                        handleDeleteTask={handleDeleteTask}
                    />
                )}
                <NewTask
                    newTask={newTask}
                    handleAddTask={handleAddTask}
                    setNewTask={setNewTask}
                />
            </ul>
            <div className="TaskNav">
                <button onClick={handleCancel} className="Cancel">CANCEL</button>
                <button onClick={handleSaveList}>SAVE</button>
            </div>
        </div >
    )
}

export default Tasks