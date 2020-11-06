import React from 'react';
import firebase from "../firebase";

function Home() {

    const handleSignout = ()=>
    {
        firebase.auth().signOut()
    }

    return (
        <div>
            <h1>---Home---</h1>
            <h1>Welcome Home</h1>
            <button onClick={handleSignout} >Signout</button>
            
        </div>
    );
}

export default Home;