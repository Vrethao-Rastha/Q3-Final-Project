import React, { Component } from 'react'
import Post from './Post'
import IdBar from './IdBar'
import Skills from './Skills'
import { bindActionCreators } from 'redux'
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { connect } from 'react-redux'
import { addPosts, addSkills, addMessages } from '../redux/actions'
import {
  Container,
  Col,
  ListGroup,
  Row,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  Navbar,
  NavbarBrand
} from 'reactstrap'

class PostList extends Component {
  state = {
    // user_name: '',
    content: '',
    skill: '',
    message: '',
    user_name: ''
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
  //  this.setState({message: `${newMessage}`, user_name: this.props.users.user_name})
   this.props.addMessages(newMessage, this.props.users.user_name)

    // Now send the message throught the backend API
  }

  handleSkillSubmit = e => {
    e.preventDefault()
    this.props.addSkills(this.state)
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
    console.log('the state:', this.state)
    if(this.props.users){
      // POST SORTING AND FILTERING
      let filteredPosts = this.props.post.filter(post => post.user_name === this.props.users.user_name )
      let thePosts = filteredPosts.map(post => <Post key={ post.id } post={ post } />)
      // USER QUOTE VARIABLE
      let userQuote = <p style={{color: 'grey'}}>{this.props.users.quote}</p>
      // let theUser = this.props.users.map(users => <IdBar key={ users.id} IdBar={IdBar} />)

      let filteredSkills = this.props.skills.filter(skill => skill.user_name === this.props.users.user_name)
      let theSkills = filteredSkills.map(skills => <Skills key={skills.id} skills={skills} />)
      return(
      <div>
        <Navbar style={{marginBottom: "20px"}} color="dark">
          <NavbarBrand className="font-face" style={{color: 'white', fontSize: "30px"}}>
            Vulkans Forge
            <i className="fa fa-cog fa-spin fa-lg fa-fw"></i>
          </NavbarBrand>
        </Navbar>
        <Container>


          <Col> <img style={{maxHeight: "75px"}} src={ this.props.users.avatar} /> { this.props.users.user_name } {userQuote}</Col>

      <Row>
        <Col md={{size: 6, offset: 2}}>
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
                onChange={e => this.setState({id:this.props.post.length+1, content: e.target.value })}
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

        {/* Skills area */}
        <Col md="3">
            <h4>Your Skills</h4>
          <ListGroup>{ theSkills }</ListGroup>
          <Form onSubmit={this.handleSkillSubmit}>
            <FormGroup>
              <Label for="skill-field">Add a skill</Label>
              <Input

                placeholder="What's have you learned today?"
                type="text"
                name="skill"
                id="skill-field"
                value={this.state.skill}
                onChange={e => this.setState({id:this.props.post.length+1, skill: e.target.value, user_name:this.props.users.user_name })}
              />
            </FormGroup>
            <Button
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>

        {/* MESSAGE AREA */}
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar={ this.props.users.avatar }
            title="Stoke the fires of Creation!"
            subtitle="" />
        {/* POST COMPONENT AREA */}
      </Row>
          <Col md="6">
            <ListGroup>{ thePosts }</ListGroup>

          </Col>
        </Container>
        </div>
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
      addPosts,
      addSkills,
      addMessages
    }, dispatch)

  const mapStateToProps = state => ({
    post: state.post,
    users: state.users[0],
    skills: state.skill
  })

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
