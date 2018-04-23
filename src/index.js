import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css';
import App from './App';
import { fetchPosts, fetchSkills, fetchProjects, fetchMessages } from './redux/actions'

  let newStore = store()
  newStore.dispatch(fetchPosts())
  // newStore.dispatch(fetchSkills())
  // newStore.dispatch(fetchProjects())
  // newStore.dispatch(fetchMessages())

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
   document.getElementById('root'));
