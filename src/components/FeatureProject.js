import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
          <NavbarBrand className="coolText" style={{color: 'white', fontSize: "30px"}}>
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
            <ListGroup>
            <Card>
              <CardText className="featureList">Awesome!! Looks just like Lydia!!!</CardText>
              <hr/>

              <CardText className="featureList">{comment} 2  {heart} 3 {like} 9  </CardText>
            </Card>
            <Card>
              <CardText className="featureList">For the Dovahkiin!!!</CardText>
              <hr/>

              <CardText className="featureList">{comment} 0  {heart} 2 {like} 3  </CardText>
            </Card>
            <Card>
              <CardText className="featureList">I used to be an adventurer like you...</CardText>
              <hr/>

              <CardText className="featureList">{comment} 0  {heart} 0 {like} 0  </CardText>
            </Card>
            <Card>
              <CardText className="featureList">I ain't stealing your sweetroll!</CardText>
              <hr/>

              <CardText className="featureList">{comment} 10 {heart} 8 {like} 9 </CardText>
            </Card>
                </ListGroup>
                </Col>

          </Row>
        </Container>
        <Navbar className="foot" color="dark">
          <NavbarBrand className="font-face" style={{color: "white"}}>&copy; 2018 Red Rocket Productions

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
    projects: state.projects[0]
  })
export default connect(mapStateToProps)(FeatureProject)
