import { useHistory } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa';

const Header = ({ loggedIn, setLoggedIn }) => {
    let history = useHistory();

    const logout = () => {
        setLoggedIn(false)
        history.push("/");
    }

    return (
        <header>
            <span>ToDo-List</span>
            {loggedIn ? <FaSignOutAlt role="button" tabIndex="0" onClick={logout} /> : ''}
        </header>
    )
}

export default Header