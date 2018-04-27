import React from 'react'
import FeaturePost from './FeaturePost'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getRandom } from './util'
import {
  Container,
  Col,
  Card,
  CardText,
  ListGroup,
  Row,
  FormGroup,
  Form,
  Label,
  ListGroupItem,
  Input,
  Button,
  Navbar,
  NavbarBrand,
  NavItem
} from 'reactstrap'

const FeatureProject = ({ projects }) => {



  let heart = <i class="fa fa-gratipay" aria-hidden="true"></i>
  let like = <i class="fa fa-hand-spock-o" aria-hidden="true"></i>
  let comment = <i class="fa fa-comments" aria-hidden="true"></i>
  if(projects){
    return(
      <div className="otherPage">
        <Navbar style={{marginBottom: "20px"}} color="dark">
          <NavbarBrand className="coolText" style={{color: 'red', fontSize: "30px"}}>
            <i className="fa fa-wrench fa-lg fa-fw"></i>
            Vulkans Forge
            <i class="fa fa-cog fa-spin fa-lg fa-fw"></i>
          </NavbarBrand>
          <NavItem style={{listStyleType: "none"}}>
            <Link style={{color: 'white', marginRight:"10px"}} to="/postlist">Home</Link>
            <Link style={{color: 'white'}} to="/"> Logout</Link>
              </NavItem>
        </Navbar>
        <Container>
          <Row>
            <Col className="clearfix">
              <h1 className="text-center">{projects.content}</h1>
                <p className="text-center">This was a huge learing experience! I wasn't sure about taking on a project of this size, but I'm really happy with the result!!</p>
            </Col>
          </Row>
          <Row>
            <img src={projects.pic}></img>
            <Col md="6">

                <Card className="featureStuff">
                  <CardText className="featureText">For the Dovahkiin!!!</CardText>
                  <CardText className="featureText">{heart} {getRandom(2,30)} {like} {getRandom(2,30)} {comment} {getRandom(2,30)}</CardText>
                </Card>

                <Card className="featureStuff">
                  <CardText className="featureText">Awesome!! Looks just like Lydia!!!</CardText>
                  <CardText className="featureText">{heart} {getRandom(2,30)} {like} {getRandom(2,30)} {comment} {getRandom(2,30)}</CardText>
                </Card>

                <Card className="featureStuff">
                  <CardText className="featureText">I used to be an adventurer like you...</CardText>
                  <CardText className="featureText">{heart} -7 {like} 0 {comment} 0</CardText>
                </Card>

                <Card className="featureStuff">
                  <CardText className="featureText">I ain't stealing your sweetroll</CardText>
                  <CardText className="featureText">{heart} {getRandom(2,30)} {like} {getRandom(2,30)} {comment} {getRandom(2,30)}</CardText>
                </Card>




          </Col>


          </Row>
        </Container>
        <Navbar className="foot" color="dark">
          <NavbarBrand className="font-face" style={{color: "white"}}>&copy; 2018 Red Rocket Productions <i style={{color:"red"}} className="fa fa-rocket fa-2x"> </i>

          </NavbarBrand>
        </Navbar>
      </div>
    )
  }else {
    return(
      <div>
        hshstrhrtdhr
      </div>
    )
  }

}

  const mapStateToProps = state => ({
    projects: state.projects[0],
    feature_posts: state.feature_posts,
    users: state.users
  })
export default connect(mapStateToProps)(FeatureProject)
