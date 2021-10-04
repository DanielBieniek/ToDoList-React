import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useState } from 'react';

const Register = ({ loggedIn, setLoggedIn }) => {
    const [registerRequest, setRegisterRequest] = useState({ "username": "", "email": "", "password": "" });
    const [repeatPassword, setRepeatPassword] = useState({ "password": "" });

    const handleChangeUsername = (e) => {
        setRegisterRequest({ ...registerRequest, username: e.target.value });
    }

    const handleChangeEmail = (e) => {
        setRegisterRequest({ ...registerRequest, email: e.target.value });
    }

    const handleChangePassword = (e) => {
        setRegisterRequest({ ...registerRequest, password: e.target.value });
    }

    const handleChangeRepeatPassword = (e) => {
        setRepeatPassword({ password: e.target.value });
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if (registerRequest.password === repeatPassword.password) {
            let registerRequestResult = await fetch("https://recruitment.ultimate.systems/auth/local/register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(registerRequest)
            });
            registerRequestResult = await registerRequestResult.json();
            console.log(registerRequestResult);
            setLoggedIn(registerRequestResult);
        } else {
            setLoggedIn({ "message": [{ "messages": [{ "message": "Passwords are not equal." }] }] });
        }
    }

    return (
        <div className="Register">
            <Link to="/" className="link"> <FaLongArrowAltLeft /> </Link>
            <h1>Create a new account</h1><br />
            <div className="LoginError">
                {loggedIn.hasOwnProperty("message") ? loggedIn.message[0].messages[0].message : ''}
            </div>
            <form onSubmit={handleRegister} >
                <input
                    type="text"
                    placeholder="Username"
                    onChange={handleChangeUsername}
                    value={registerRequest.username}
                />
                <input
                    type="text"
                    placeholder="Email"
                    onChange={handleChangeEmail}
                    value={registerRequest.email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChangePassword}
                    value={registerRequest.password}
                />
                <input
                    type="password"
                    placeholder="Repeat Password"
                    onChange={handleChangeRepeatPassword}
                    value={repeatPassword.password}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default Register