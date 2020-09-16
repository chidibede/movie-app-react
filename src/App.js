import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Genres from './components/pages/Genres'
import Navbar from './components/Navbar/Navbar'
import About from './components/pages/About'
import Login from './components/pages/Login'
import Home from './components/pages/Home'


const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/genres" component={Genres}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </Router>

        </div>
    )
}

export default App;