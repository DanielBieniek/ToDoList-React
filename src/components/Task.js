import { FaTrashAlt } from 'react-icons/fa';

const Task = ({ item, listId, handleChangeCheckbox, handleChangeTaskName, handleDeleteTask }) => {
    return (
        <li className="TaskElement" key={item.id}>
            <input
                onChange={() => handleChangeCheckbox(listId, item.id)}
                type="checkbox"
                checked={item.isDone}
            />
            <input
                onChange={(e) => handleChangeTaskName(e, listId, item.id)}
                type="text"
                placeholder="Task name"
                value={item.name}
            />
            <FaTrashAlt className="trashButton" role="button" tabIndex="0" onClick={() => handleDeleteTask(listId, item.id)} />
        </li>
    )
}

export default Task