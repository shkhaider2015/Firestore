import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './home';
import Login from "./login";
import SignUp from "./signUp";
import { AuthProvider } from "./authContext";
import PrivateRoute from './privateRoute';

function HomeApp() {
    return (
        <div>
            <h3> App
            </h3>
            <div>
                <AuthProvider>
                    <Router >

                        <Routes >
                            <PrivateRoute path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<SignUp />} />
                        </Routes>

                    </Router>
                </AuthProvider>

            </div>

        </div>
    );
}

export default HomeApp;