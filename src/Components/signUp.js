import React from 'react';

function signUp() {

    const handleSignUp = ()=> 
    {

    }

    return (
        <div>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                <input name="email" type="email" placeholder="Email" />
                </label><br />

                <label>
                    Password
                <input name="email" type="email" placeholder="Password" />
                </label><br />
                <button type="submit" >Signup</button>
            </form>
            
        </div>
    );
}

export default signUp;