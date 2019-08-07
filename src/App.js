import React from 'react';
import './App.css';
import Restaurants from "./components/Restaurants";
import Restaurant from "./components/Restaurant";
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <Route exact path="/" component={Restaurants}/>
            <Route path="/detail/:id" component={Restaurant}/>
        </Router>
    );
}

export default App;
