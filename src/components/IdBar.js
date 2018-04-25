import React from 'react'
import { connect } from 'react-redux'
import { Col,
  Row
 } from 'reactstrap'


 const IdBar = ({ users }) => {
   let userQuote = <p style={{color: 'grey'}}>{users.quote}</p>
   return(
     <div>
       <Row>
      <img className="coolText" style={{maxHeight: "75px"}} src={ users.avatar}/> <p className="coolText">{ users.user_name }</p>  <p>{userQuote}</p>
     </Row>
     </div>
   )
 }

 const mapStateToProps = state => ({
   users: state.users[0]
 })

export default connect(mapStateToProps)(IdBar)
