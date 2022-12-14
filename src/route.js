import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";

const RouteNavigation = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
};


export default RouteNavigation;