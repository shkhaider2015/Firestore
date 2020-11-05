import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './home';
import Login from "./login";
import SignUp from "./signUp";

function HomeApp() {
    return (
        <div>
            <h3> App
            </h3>
            <div>
                <Router >

                    <Routes >
                        <Route path="/"  element={<Home />} />
                        <Route path="/home" element={ <Home /> } />
                        <Route path="/login" element={ <Login /> } />
                        <Route path="/signup" element={ <SignUp /> } />
                    </Routes>

                </Router>
            </div>
            
        </div>
    );
}

export default HomeApp;