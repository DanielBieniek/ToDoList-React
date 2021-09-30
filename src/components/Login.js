import { Link, useHistory } from 'react-router-dom'

const Login = ({ setLoggedIn }) => {
    let history = useHistory();

    const handleClick = () => {
        setLoggedIn(true);
        history.push("/list");
    }

    return (
        <div className="Login">
            <h1>Login</h1><br />
            <input type="text" placeholder="Email or Username" />
            <input type="text" placeholder="Password" />
            <button onClick={handleClick}>Login</button>
            <p>or</p>
            <Link to="/register" className="link"> create an account </Link>
        </div>
    )
}

export default Login