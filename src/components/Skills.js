import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ListGroupItem,
         Input,
         InputGroup,
         Button
 } from 'reactstrap'

 const Skills = ({ skills }) => {
   return(
     <ListGroupItem> <p>{ skills.skill }</p> </ListGroupItem>
   )
 }

export default Skills
