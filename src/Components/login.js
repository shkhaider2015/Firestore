import React, { useContext } from 'react';
import firebase from "../firebase";
import { AuthContext } from "./authContext";
import { Navigate } from "react-router-dom";




function Login ({ history })
{

    const handleLogin = React.useCallback(
        async e => {
            e.preventDefault();
            const { email, password } = e.target.elements;
            try
            {
                await firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            }catch(error)
            {
                alert(error)
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if(currentUser)
    {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h1>---Login---</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                <input name="email" type="email" placeholder="Email" />
                </label>
                <br />
                <label>
                    Password
                <input name="password" type="password" placeholder="Password" />
                </label>
                <br />
                <button type="submit" >login</button>
            </form>

        </div>
    );
    
}

export default Login;