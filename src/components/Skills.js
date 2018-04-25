import React from 'react'
import { ListGroupItem
 } from 'reactstrap'

 const Skills = ({ skills }) => {
   return(
     <ListGroupItem> <p className="coolText">{ skills.skill }</p> </ListGroupItem>

   )
 }

export default Skills
