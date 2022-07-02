import React from   "react";
import Login from "./login"
import Signup from './signup';
import DataFrontend from "../DataFrontend";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import DataFrontend from "../DataFrontend";

export default function Approuting ()
{
    return(
        <Router>
            <Routes>
       
            <Route  path="/signup" element={ <Signup/> } />
            <Route  path="/login" element={ <Login/> } />
            <Route  path="/DataFrontend" element={ <DataFrontend/> } />
            <Route path="*" return ={() => "404 not found!"} />
            </Routes>
        </Router>
    )
}