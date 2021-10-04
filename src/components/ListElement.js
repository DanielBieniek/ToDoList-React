import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa';

const ListElement = ({ list, handleDeleteListElement }) => {
    return (
        <>
            <Link to={"/list/" + list.id} className="ListElementLink">
                <span className="TaskName">{list.name}</span>
                <span>Created at: {list.published_at.substring(0, 10)}</span>
                <span>
                    Completed: {list.task.filter((t) => t.isDone === true).length} Uncompleted: {list.task.filter((t) => t.isDone === false).length} All: {list.task.length}
                </span>
            </Link>
            <FaTrashAlt className="trashButton" role="button" onClick={() => handleDeleteListElement(list.id)} />
        </>
    )
}

export default ListElement