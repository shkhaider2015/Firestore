import React from 'react';

function home() {

    const handleSignout = ()=>
    {

    }

    return (
        <div>
            <h1>Welcome Home</h1>
            <button onClick={handleSignout} >Signout</button>
            
        </div>
    );
}

export default home;