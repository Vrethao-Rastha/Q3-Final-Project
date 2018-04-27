import React, { Component } from 'react'
import Post from './Post'
import IdBar from './IdBar'
import Skills from './Skills'
import AddPost from './AddPost'
import noelPic from '../images/maxresdefault.jpg'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { connect } from 'react-redux'
import background from '../images/oldKeys.jpg'
import { addSkills, addMessages } from '../redux/actions'
import {
  Container,
  Col,
  Card,
  CardText,
  ListGroup,
  Row,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand
} from 'reactstrap'

class PostList extends Component {
  state = {
    content: '',
    skill: '',
    message: '',
    user_name: ''
  }


  // componentDidMount(){
  //   // let filteredMessage = this.props.message.filter(message => message.target_user === this.props.users.user_name)
  //     //  let theMessages = filteredMessage[0].message
  //     addResponseMessage( 'blah' )
  //   }
  getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  handleNewUserMessage = (newMessage) => {

    // this.props.addMessages(this.props.users.user_name, newMessage)

     if(newMessage.length > 15){
      setTimeout(function(){ addResponseMessage("Yeah, I have it in my workshop somewhere") }, 3000);

    }else if(newMessage.length < 15 && newMessage.length > 6){

        setTimeout(function(){ addResponseMessage('Sure! What do you need?') }, 3000);

    }else if(newMessage.length < 5){
      setTimeout(function(){ addResponseMessage("I'll dig it out and bring it by") }, 3000);
  }
}

  handleSkillSubmit = e => {
    e.preventDefault()
    this.props.addSkills(this.state)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addPosts(this.state)
  }

  render(){
    if(this.props.users){
      //CHAT BOX FUNCTION, ABANODONED FOR NOW
      // let filteredMessage = this.props.message.filter(message => message.target_user === this.props.users.user_name)
      // let theMessages = filteredMessage[0].message
      // console.log('filter:', theMessages)

      let picStyle = {
        height: "1701px",
        maxWidth: "100%",
        backgroundImage: `url(${background})`,
        zIndex:"-1",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "50px",
        marginBottom: "20px",
        border: "1px solid white",
      }

      let heart = <i class="fa fa-gratipay" aria-hidden="true"></i>
      let like = <i class="fa fa-hand-spock-o" aria-hidden="true"></i>
      let comment = <i class="fa fa-comments" aria-hidden="true"></i>
      // POST SORTING AND FILTERING
      let filteredPosts = this.props.posts.filter(post => post.user_name === this.props.users.user_name )
      let thePosts = filteredPosts.map(post => <Post key={ post.id } post={ post } /> )
      //SKILL
      let filteredSkills = this.props.skills.filter(skill => skill.user_name === this.props.users.user_name)
      let theSkills = filteredSkills.map(skills => <Skills key={skills.id} skills={skills} />)



      return(
      <div className="pic" style={picStyle} >
        <Navbar style={{marginBottom: "20px", top:"0"}} color="dark">
          <NavbarBrand className="coolText" style={{color: 'red', fontSize: "30px"}}>
            <i className="fa fa-wrench fa-lg fa-fw"></i>
            Vulkans Forge
            <i className="fa fa-cog fa-spin fa-lg fa-fw"></i>
          </NavbarBrand>
          <NavItem style={{listStyleType: "none"}}>
                <Link style={{color: 'white', marginRight:"10px"}} to="/featurelist">My Projects</Link>
                <Link style={{color: 'white'}} to="/"> Logout</Link>
              </NavItem>
        </Navbar>
        <Container>

            {/* Idbar component */}
            <IdBar />

            {/* ADD POST COMPONENT */}
            <Row>
              <Col md="6">
                <AddPost />
              </Col>

        {/* Skills area */}
        <Col style={{marginBottom: "20px", backgroundColor:"black", border:"1px solid white"}} md={{size: 3, offset: 1}}>
            <h4 style={{color:"white", marginTop:"15px"}}>My Skills</h4>
          <ListGroup>{ theSkills }</ListGroup>
          <Form onSubmit={this.handleSkillSubmit}>
            <FormGroup>
              <h5 style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black", color:"white"}}>Learned something new? Add it to your Skill set!</h5>
              <Input
                style={{border: "1px solid black"}}
                placeholder="What have you learned today?"
                type="text"
                name="skill"
                id="skill-field"
                value={this.state.skill}
                onChange={e => this.setState({skill: e.target.value, user_name:this.props.users.user_name })}
              />
            </FormGroup>
            <Button
              style={{border: "1px solid white", marginBottom:"15px"}}
              type="submit"
              >
                Grow with us!
              </Button>
          </Form>
        </Col>

        {/* MESSAGE AREA */}
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar={ noelPic }
            title="Stoke the fires of Creation!"
            subtitle="" />

        {/* POST COMPONENT AREA */}
      </Row>
            <Col md="8">
              <ListGroup  style={{paddingLeft: "0px", marginLeft: "0px"}}>
                { thePosts }
              </ListGroup>




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
      addSkills,
      addMessages
    }, dispatch)

  const mapStateToProps = state => ({
    posts: state.post,
    users: state.users[0],
    skills: state.skill,
    projects: state.projects[0],
    message: state.message
  })

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
