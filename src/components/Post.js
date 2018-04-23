import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ListGroupItem,
         Input,
         InputGroup,
         Button
 } from 'reactstrap'

 const Post = ({ post }) => {
   return(
     <ListGroupItem> <p>{ post.content }</p> </ListGroupItem>
   )
 }

export default Post
