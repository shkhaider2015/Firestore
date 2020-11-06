import React from 'react';
import { Navigate, Route } from 'react-router';
import { AuthContext } from './authContext'

function PrivateRoute({ element : RouteComponent, ...rest }) {
    const { currentUser } = React.useContext(AuthContext)
    console.log("PrivateRoute / CurrentUser --> ", currentUser)
    console.log("PrivateRoute / ...rest --> ", rest)
    console.log("PrivateRoute / RouteComponent --> ", RouteComponent)
    return (
        <Route
        {...rest}
        render={routeProps => !!currentUser ?  ( <RouteComponent {...routeProps} /> ) : ( <Navigate to="/login" />  )
        
        }
        // render={
        //     (routeProps) => 
        //     {
        //         console.log("Current user render props ")
        //     if(currentUser)
        //     {
        //         console.log("Current user is not null")
        //         return( <RouteComponent {...routeProps} /> )
        //     }
        //     else
        //     {
        //         console.log("Current user is null")
        //         return( <Navigate to="login" /> )
        //     }
        // }}
        
        />
    );
}

export default PrivateRoute;