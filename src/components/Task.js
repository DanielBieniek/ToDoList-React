import { FaTrashAlt } from 'react-icons/fa';

const Task = ({ item, handleChangeCheckbox, handleChangeTaskName, handleDeleteTask }) => {
    return (
        <li className="TaskElement">
            <input
                onChange={() => handleChangeCheckbox(item.id)}
                type="checkbox"
                checked={item.isDone}
            />
            <input
                onChange={(e) => handleChangeTaskName(e, item.id)}
                type="text"
                placeholder="Task name"
                value={item.name}
            />
            <FaTrashAlt className="trashButton" role="button" tabIndex="0" onClick={() => handleDeleteTask(item.id)} />
        </li>
    )
}

export default Task