import { Link } from 'react-router-dom'
import { useState } from 'react';

const Login = ({ loggedIn, setLoggedIn }) => {
    const [loginRequest, setLoginRequest] = useState({ "identifier": "", "password": "" });

    const handleChangeIdentifier = (e) => {
        setLoginRequest({ ...loginRequest, identifier: e.target.value });
    }

    const handleChangePassword = (e) => {
        setLoginRequest({ ...loginRequest, password: e.target.value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        let loginRequestResult = await fetch("https://recruitment.ultimate.systems/auth/local", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(loginRequest)
        });
        loginRequestResult = await loginRequestResult.json();
        setLoggedIn(loginRequestResult);
    }

    return (
        <div className="Login">
            <h1>Login</h1><br />
            <div className="LoginError">
                {loggedIn.hasOwnProperty("message") ? loggedIn.message[0].messages[0].message : ''}
            </div>
            <form onSubmit={handleLogin} >
                <input
                    type="text"
                    placeholder="Email or Username"
                    onChange={handleChangeIdentifier}
                    value={loginRequest.identifier}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChangePassword}
                    value={loginRequest.password}
                />
                <button type="submit">Login</button>
            </form>
            <p>or</p>
            <Link to="/register" className="link"> create an account </Link>
        </div>
    )
}

export default Login