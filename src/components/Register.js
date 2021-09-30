import { Link, useHistory } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa';

const Register = ({ setLoggedIn }) => {
    let history = useHistory();

    const handleClick = () => {
        setLoggedIn(true);
        history.push("/list");
    }

    return (
        <div className="Register">
            <Link to="/" className="link"> <FaLongArrowAltLeft /> </Link>
            <h1>Create a new account</h1><br />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Repeat Password" />
            <button onClick={handleClick}>Create</button>
        </div>
    )
}

export default Register