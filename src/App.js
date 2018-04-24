import React, { Component } from 'react';
import Login from './components/Login'
import PostList from './components/PostList'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component = { Login } />
            <Route path="/postlist" component = { PostList } />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
