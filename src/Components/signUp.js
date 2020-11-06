import React from 'react';
import firebase from "../firebase";

function SignUp({ history }) {

    const handleSignUp = React.useCallback(
        async e => {
            e.preventDefault();
            const {email, password} = e.target.elements;
            try{
                await firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
                history.push("/");
            }catch(error)
            {
                alert(error)
            }
        },
        [history]
    );

    return (
        <div>
            <h1>---Signup---</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                <input name="email" type="email" placeholder="Email" />
                </label><br />

                <label>
                    Password
                <input name="password" type="password" placeholder="Password" />
                </label><br />
                <button type="submit" >Signup</button>
            </form>
            
        </div>
    );
}

export default SignUp;