import React from 'react'
import { ListGroupItem
 } from 'reactstrap'

 const Skills = ({ skills }) => {
   return(
     <ListGroupItem style={{border: "1px solid black"}}> <p className="coolText">{ skills.skill }</p> </ListGroupItem>

   )
 }

export default Skills
