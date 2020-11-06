import React from "react";
import firebase from "../firebase";


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => 
{
    const [currentUser, setCurrentUser] = React.useState(null);
    const [pending, setPending] = React.useState(true);

    React.useEffect(
        ()=>
        {
            firebase
            .auth()
            .onAuthStateChanged(
                (user)=>
                {
                    setCurrentUser(user);
                    setPending(false);
                }
            );
        },
        []
    );

    if(pending)
    {
        return(
            <>
                Loading...
            </>
        )
    }

    return(
        <AuthContext.Provider
        value={{
            currentUser
        }}
        >
            { children }
        </AuthContext.Provider>
    )
}