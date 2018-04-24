import axios from 'axios'
//ADD/REMOVE POSTS
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const ADD_POSTS_FAILED = 'ADD_POSTS_FAILED'
export const ADD_POSTS_SUCCESS = 'ADD_POSTS_SUCCESS'
export const DELETE_POSTS_FAILED = 'DELETE_POSTS_FAILED'
export const DELETE_POSTS_SUCCESS = 'DELETE_POSTS_SUCCESS'
//ADD/REMOVE SKILLS
export const FETCH_SKILLS_SUCCESS = 'FETCH_SKILLS_SUCCESS'
export const FETCH_SKILLS_FAILED = 'FETCH_SKILLS_FAILED'
export const ADD_SKILLS_SUCCESS = 'ADD_SKILLS_SUCCESS'
export const ADD_SKILLS_FAILED = 'ADD_SKILLS_FAILED'
export const DELETE_SKILLS_SUCCESS = 'DELETE_SKILLS_SUCCESS'
export const DELETE_SKILLS_FAILED = 'DELETE_SKILLS_FAILED'
//ADD/REMOVE MESSAGES
export const FETCH_MESSAGES_FAILED = 'FETCH_MESSAGES_FAILED'
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'
export const ADD_MESSAGES_FAILED = 'ADD_MESSAGES_FAILED'
export const ADD_MESSAGES_SUCCESS = 'ADD_MESSAGES_SUCCESS'
export const DELETE_MESSAGES_FAILED = 'DELETE_MESSAGES_FAILED'
export const DELETE_MESSAGES_SUCCESS = 'DELETE_MESSAGES_SUCCESS'
//ADD/REMOVE PROJECTS
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS'
export const FETCH_PROJECTS_FAILED = 'FETCH_PROJECTS_FAILED'
export const ADD_PROJECTS_SUCCESS = 'ADD_PROJECTS_SUCCESS'
export const ADD_PROJECTS_FAILED = 'ADD_PROJECTS_FAILED'
export const DELETE_PROJECTS_SUCCESS = 'DELETE_PROJECTS_SUCCESS'
export const DELETE_PROJECTS_FAILED = 'DELETE_PROJECTS_FAILED'

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

  export const fetchUser = () => {
    return dispatch => {
      axios.get(`http://localhost:8000/users`)
      .then(res => dispatch({
        type: FETCH_USER_SUCCESS,
        //temporary testing measure to get one user
        payload: res.data.slice(0, 1)
      }))
      .catch(err => dispatch({
        type: FETCH_USER_FAILED,
        payload: err
      }))
    }
  }

  export const fetchPosts = () => {
    return dispatch => {
      axios.get(`http://localhost:8000/posts`)
        .then(res => dispatch({
          type: FETCH_POSTS_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: FETCH_POSTS_FAILED,
          payload: err
        }))
    }
  }

  export const addPosts = (post) => {
    console.log('post', post)
    return dispatch => {
      axios.post(`http://localhost:8000/posts`, post)
        .then(res => dispatch({
          type: ADD_POSTS_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: ADD_POSTS_FAILED,
          payload: err
        }))
    }
  }

  export const removePosts = (id) => {
    console.log('id', id)
    return dispatch => {
      console.log('entered dispatch')
      axios.delete(`http://localhost:8000/posts/${id}`)
        .then(res => dispatch({
          type: DELETE_POSTS_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: DELETE_POSTS_FAILED,
          payload: err
        }))
    }
  }

  export const fetchSkills = () => {
    return dispatch => {
      axios.get(`http://localhost:8000/skills`)
        .then(res => dispatch({
          type: FETCH_SKILLS_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: FETCH_SKILLS_FAILED,
          payload: err
        }))
    }
  }

  export const addSkills = (skill) => {
    return dispatch => {
      axios.post(`http://localhost:8000/skills`, skill)
        .then(res => dispatch({
          type: ADD_SKILLS_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: ADD_SKILLS_FAILED,
          payload: err
        }))
    }
  }

  export const removeSkills = (id) => {
    return dispatch => {
      axios.delete(`http://localhost:8000/skills/${id}`)
        .then(res => dispatch({
          type: ADD_SKILLS_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: ADD_SKILLS_FAILED,
          payload: err
        }))
    }
  }

  export const fetchMessages = () => {
    return dispatch => {
      axios.get(`http://localhost:8000/message`)
        .then(res => dispatch({
          type: FETCH_MESSAGES_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: FETCH_MESSAGES_FAILED,
          payload: err
        }))
    }
  }

  export const addMessages = (message) => {
    return dispatch => {
      axios.post(`http://localhost:8000/messages`)
        .then(res => dispatch({
          type: ADD_MESSAGES_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: ADD_MESSAGES_FAILED,
          payload: err
        }))
    }
  }

  export const fetchProjects = () => {
    return dispatch => {
      axios.get(`http://localhost:8000/projects`)
        .then(res => dispatch({
          type: FETCH_PROJECTS_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: FETCH_PROJECTS_FAILED,
          payload: err
        }))
    }
  }

  export const addProjects = (project) => {
    return dispatch => {
      axios.post(`http://localhost:8000/projects`, project)
        .then(res => dispatch({
          type: ADD_PROJECTS_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: ADD_PROJECTS_FAILED,
          payload: err
        }))
    }
  }
