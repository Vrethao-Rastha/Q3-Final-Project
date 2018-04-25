import React, { Component } from 'react'
import { addPosts } from '../redux/actions'
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AddPost extends Component {
  state = {
    content: '',
    skill: '',
    message: '',
    user_name: ''
  }
handleSubmit = e => {
    e.preventDefault()
    this.props.addPosts(this.state)
  }

  Valididation = () => {
    for(let field in this.state) {
      if(this.state[field].length < 1) return true
    }
    return false
  }


  render(){
    return(
      <Row style={{marginTop: "30px"}}>
        <Col>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <h4>Up to something? Let the world know!</h4>
              <Input
                valid={this.state.content.length < 1 ? false : true}
                placeholder="What are you making?"
                type="text"
                name="content"
                id="content-field"
                value={this.state.content}
                onChange={e => this.setState({id:this.props.post.length+1, content: e.target.value, user_name:this.props.users.user_name })}
              />
            </FormGroup>
            <Button
              type="submit"
              // disabled={this.Validation()}
            >
              Post
            </Button>
          </Form>
        </Col>
      </Row>
    )
  }
}
  const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addPosts
  }, dispatch)

  const mapStateToProps = state => ({
    users: state.users[0],
    post: state.post
  })

  export default connect(mapStateToProps, mapDispatchToProps) (AddPost)
