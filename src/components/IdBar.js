import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRandom } from './util'
import { Col,
  Row
 } from 'reactstrap'


 const IdBar = ({ users }) => {

   return(
     <div>
       <Row  style={{border: "2px solid white", marginBottom: "20px", backgroundColor: "white", boxShadow: "5px 10px #222222"}}>
      <img className="coolText" style={{maxHeight: "10em", border:"1px solid white"}} src={ users.avatar }/>
      <p className="coolText idBar"> { users.user_name } </p>

      <p className="coolText" style={{fontSize: "15pt", marginLeft:"2em", marginTop:"1em"}} > Projects Completed: { getRandom(10,50)} Projects Collaborated: { getRandom(5,50)}

         <br/> Projects Consulted: { getRandom(10,100)} Community Rating: { getRandom(200,1000)} </p>

      <p style={{marginLeft: "20px", marginTop: "10px", fontSize: "15pt"}} > {users.quote} </p>
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
