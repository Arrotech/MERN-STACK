import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';
import NavBar from './components/NavBar';
import TodosList from './components/TodosList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <NavBar/>
          <Route path="/" exact component={TodosList}/>
          <Route path="/edit/:id" component={EditTodo}/>
          <Route path="/create" component={CreateTodo}/>
        </Router>
      </div>
    );
  }
}

export default App;
