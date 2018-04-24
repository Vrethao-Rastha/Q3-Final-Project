import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removePosts } from '../redux/actions'
import { ListGroupItem,
         Input,
         InputGroup,
         Button,
         Row,
         Container,
 } from 'reactstrap'

 const Post = ({ post, removePosts }) => {
   let theX = <Button className="btn btn-secondary fa fa-times pull-right"
    value={post.id}
    onClick={() => removePosts(post.id)}
    ></Button>

   return(
        <div className="clearfix">

          <ListGroupItem style={{marginBottom: "10px"}}> <p>{ post.content } { theX }</p> </ListGroupItem>
        </div>

   )
 }

 const mapDispatchToProps = dispatch =>
  bindActionCreators({
    removePosts
  }, dispatch)

export default connect(null, mapDispatchToProps)(Post)
