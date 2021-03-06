import React, { Component } from 'react';
import Login from './components/Login'
import About from './components/About'
import PostList from './components/PostList'
import FeatureProject from './components/FeatureProject'
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
            <Route path="/about" component = { About } />
            <Route path="/postlist" component = { PostList } />
            <Route path="/featurelist" component = { FeatureProject } />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
