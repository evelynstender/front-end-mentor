import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from './App';


const routing = (
    <Router>
            <Route path="/profile-card-component" component={App} />
    </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
