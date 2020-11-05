import React from 'react';




function Login ()
{

    const handleLogin = () => 
    {

    }

    return (
        <div>

            <form onSubmit={handleLogin}>
                <label>
                    Email
                <input name="email" type="email" placeholder="Email" />
                </label>
                <br />
                <label>
                    Password
                <input name="email" type="email" placeholder="Password" />
                </label>
                <br />
                <button type="submit" >login</button>
            </form>

        </div>
    );
    
}

export default Login;