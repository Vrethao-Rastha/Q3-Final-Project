import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRandom } from './util'
import { Col,
  Row
 } from 'reactstrap'


 const IdBar = ({ users }) => {
   let userQuote = <p style={{color: 'grey', textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>{users.quote}</p>
   return(
     <div>
       <Row  style={{border: "2px solid white", marginBottom: "20px", backgroundColor: "black"}}>
      <img className="coolText" style={{maxHeight: "175px", border:"1px solid white"}} src={ users.avatar }/>
      <p style={{fontSize: "50pt", marginLeft: "20px",   textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"}} className="coolText idBar"> { users.user_name } </p>

      <p className="coolText idBar" style={{marginLeft: "50px", fontSize: "15pt", color:"white",   textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }} > Projects Completed: { getRandom(10,50)} Projects Collaborated: { getRandom(5,50)}

         <br/> Projects Consulted: { getRandom(10,100)} Community Rating: { getRandom(200,1000)} </p>

      <p style={{marginLeft: "20px", marginTop: "10px", fontSize: "15pt"}} > {userQuote} </p>
     </Row>
     </div>
   )
 }

 const mapStateToProps = state => ({
   users: state.users[0]
 })

 const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getRandom
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(IdBar)
