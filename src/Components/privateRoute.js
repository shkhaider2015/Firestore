import React from 'react';
import { Navigate, Route } from 'react-router';
import { AuthContext } from './authContext'

function PrivateRoute({ component : RouteComponent, ...rest }) {
    const { currentUser } = React.useContext(AuthContext)
    console.log("PrivateRoute / CurrentUser --> ", currentUser)
    console.log("PrivateRoute / ...rest --> ", ...rest)
    return (
        <Route
        {...rest}
        render={routeProps => !!currentUser ? ( <Navigate to="/login" />  ) : ( <RouteComponent {...routeProps} /> )
        
        }
        
        />
    );
}

export default PrivateRoute;