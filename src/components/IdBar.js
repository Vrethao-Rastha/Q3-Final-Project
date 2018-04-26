import React from 'react'
import { connect } from 'react-redux'
import { Col,
  Row
 } from 'reactstrap'


 const IdBar = ({ users }) => {
   let userQuote = <p style={{color: 'grey'}}>{users.quote}</p>
   return(
     <div>
       <Row  style={{border: "1px solid black", marginBottom: "20px"}}>
      <img className="coolText" style={{maxHeight: "175px"}} src={ users.avatar}/> <p style={{fontSize: "50pt", marginLeft: "20px"}} className="coolText">{ users.user_name }</p> <p className="coolText" style={{marginLeft:"50px", fontSize:"15pt"}}> Projects Completed: {users.projects_completed} Projects Collaborated: {users.projects_collaborated} <br/> Projects Consulted: {users.projects_consulted} Community Rating: {users.community_rating}</p>  <p style={{marginLeft: "20px", fontSize: "15pt"}}>{userQuote}</p>
     </Row>
     </div>
   )
 }

 const mapStateToProps = state => ({
   users: state.users[0]
 })

export default connect(mapStateToProps)(IdBar)
