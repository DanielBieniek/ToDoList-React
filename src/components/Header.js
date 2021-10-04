import { FaSignOutAlt } from 'react-icons/fa';

const Header = ({ loggedIn, setLoggedIn, setLists }) => {

    const handleLogout = () => {
        setLists([])
        setLoggedIn({})
    }

    return (
        <header>
            <span>ToDo-List</span>
            {(loggedIn.hasOwnProperty("user") ?? loggedIn.user.id) ? <FaSignOutAlt role="button" onClick={handleLogout} /> : ''}
        </header>
    )
}

export default Header