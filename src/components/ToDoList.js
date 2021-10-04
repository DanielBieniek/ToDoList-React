import SearchAndSort from './SearchAndSort'
import ListElement from './ListElement'
import { FaPlusCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

const ToDoList = ({ lists, setLists, auth }) => {
    let history = useHistory();
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');

    useEffect(() => {
        const readList = async () => {
            let sortQuery = sort ? "?_sort=" + sort : "";
            let readListRequestResult = await fetch("https://recruitment.ultimate.systems/to-do-lists" + sortQuery, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + auth,
                    "Accept": "application/json"
                }
            });
            readListRequestResult = await readListRequestResult.json();

            if (Array.isArray(readListRequestResult)) {
                setLists(readListRequestResult);
            }
        }
        (async () => await readList())();
    }, [sort])

    const emptyListObject = {
        "name": "ToDo List Name",
        "task": []
    }

    const generateNewList = async () => {
        let newListRequestResult = await fetch("https://recruitment.ultimate.systems/to-do-lists", {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + auth,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(emptyListObject)
        });
        newListRequestResult = await newListRequestResult.json();

        if (newListRequestResult.hasOwnProperty("id")) {
            const tempList = lists.concat(newListRequestResult);
            setLists(tempList);
            history.push("/list/" + newListRequestResult.id);
        }
    }

    const handleDeleteListElement = async (id) => {
        let deleteRequestResult = await fetch("https://recruitment.ultimate.systems/to-do-lists/" + id, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + auth,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        deleteRequestResult = await deleteRequestResult.json();

        if (deleteRequestResult.hasOwnProperty("id")) {
            const tempList = lists.filter(list => list.id !== deleteRequestResult.id);
            setLists(tempList);
        }
    }

    return (
        <div className="ToDoList">
            <ul>
                <SearchAndSort search={search} setSearch={setSearch} setSort={setSort} />
                {!lists?.length ?
                    <li className="ListElement">
                        <span>List is empty.</span>
                    </li>
                    : <>
                        {lists.filter(list => ((list.name).toLowerCase()).includes(search.toLowerCase())).map(list =>
                            <li className="ListElement" key={list.id}>
                                <ListElement list={list} handleDeleteListElement={handleDeleteListElement} />
                            </li>
                        )}
                    </>}
            </ul>
            <FaPlusCircle className="link addListButton" role="button" onClick={generateNewList} />
        </div>
    )
}

export default ToDoList