import SearchAndSort from './SearchAndSort'
import ListElement from './ListElement'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa';
import { useState } from 'react';

const ToDoList = ({ lists, setLists }) => {
    const [search, setSearch] = useState('')

    let nextId = lists?.length ? lists[lists.length - 1].id + 1 : 1;

    const emptyListObject = {
        "id": nextId,
        "name": "ToDo List Name",
        "task": [],
        "published_at": new Date().toISOString()
    }

    const generateNextList = () => {
        const tempList = lists.concat(emptyListObject);
        setLists(tempList);
    }

    const handleDeleteListElement = (id) => {
        const tempList = lists.filter(list => list.id !== id);
        setLists(tempList);
    }

    return (
        <div className="ToDoList">
            <ul>
                <SearchAndSort search={search} setSearch={setSearch} />
                {!lists?.length ?
                    <li className="ListElement">
                        <span>List is empty.</span>
                    </li>
                    : <>
                        {lists.filter(list => ((list.name).toLowerCase()).includes(search.toLowerCase())).map(list =>
                            <li className="ListElement">
                                <ListElement list={list} handleDeleteListElement={handleDeleteListElement} />
                            </li>
                        )}
                    </>}
            </ul>
            <Link to={"/list/" + nextId} className="link addListButton" onClick={generateNextList}> <FaPlusCircle /> </Link>
        </div>
    )
}

export default ToDoList