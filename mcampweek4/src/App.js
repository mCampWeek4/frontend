import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Home} from './pages'

class App extends Component {
  render() {
    return (
        <div>
            <Route exact path="/" component={Home}/>
        </div>
    );
}
}

export default App;
