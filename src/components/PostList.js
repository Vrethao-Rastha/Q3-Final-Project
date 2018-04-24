import React, { Component } from 'react'
import Post from './Post'
import IdBar from './IdBar'
import Skills from './Skills'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPosts } from '../redux/actions'
import {
  Container,
  Col,
  ListGroup,
  Row,
  FormGroup,
  Form,
  Label,
  Input,
  Button
} from 'reactstrap'

class PostList extends Component {
  state = {
    // user_name: '',
    content: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addPosts(this.state)
  }

  Validation = () => {
    for(let field in this.state) {
      if(this.state[field].length < 1) return true
    }
    return false
  }



  render(){
    console.log('props in postlist:', this.props)
    if(this.props.users){
      // POST SORTING AND FILTERING
      let filteredPosts = this.props.post.filter(post => post.user_name === this.props.users.user_name )
      let thePosts = filteredPosts.map(post => <Post key={ post.id } post={ post } />)
      // let theUser = this.props.users.map(users => <IdBar key={ users.id} IdBar={IdBar} />)

      let filteredSkills = this.props.skills.filter(skill => skill.user_name === this.props.users.user_name)
      console.log('filteredSkills', filteredSkills)
      let theSkills = filteredSkills.map(skills => <Skills key={skills.id} skills={skills} />)
      console.log('theSkills', theSkills)
      return(
        <Container>
          <Col> <img style={{maxHeight: "75px"}} src={ this.props.users.avatar} /> { this.props.users.user_name }</Col>

      <Row>
        <Col md={{size: 6, offset: 3}}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="content-field">New Post</Label>
              <Input
                valid={this.state.content.length < 1 ? false : true}
                placeholder="What's on your mind?"
                type="text"
                name="content"
                id="content-field"
                value={this.state.content}
                onChange={e => this.setState({ content: e.target.value })}
              />
            </FormGroup>
            <Button
              type="submit"
              // disabled={this.Validation()}
            >
              Submit
            </Button>
          </Form>
        </Col>

        <Col md="2">
            <h4>Your Skills</h4>
          <ListGroup>{ theSkills }</ListGroup>
        </Col>

        {/* POST COMPONENT AREA */}
      </Row>
          <Col md={{size: 8, offset: 2}}>
            <ListGroup>{ thePosts }</ListGroup>

          </Col>
        </Container>
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }
  }

}
  const mapDispatchToProps = dispatch =>
    bindActionCreators({
      addPosts
    }, dispatch)

  const mapStateToProps = state => ({
    post: state.post,
    users: state.users[0],
    skills: state.skill
  })

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
