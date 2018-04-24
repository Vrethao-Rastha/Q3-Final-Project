import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ListGroupItem,
         Input,
         InputGroup,
         Button
 } from 'reactstrap'

 const IdBar = ({ users }) => {
   return(
     <ListGroupItem> <p>{ users.avatar}, { users.user_name }, { users.quote }</p> </ListGroupItem>
   )
 }

export default IdBar
