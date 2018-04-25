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
      <div>
        <Navbar style={{marginBottom: "20px"}} color="dark">
          <NavbarBrand className="coolText" style={{color: 'white', fontSize: "30px"}}>
            <i className="fa fa-wrench fa-lg fa-fw"></i>
            Vulkans Forge
            <i class="fa fa-cog fa-spin fa-lg fa-fw"></i>
          </NavbarBrand>
          <NavItem style={{listStyleType: "none"}}>
                <Link style={{color: 'white'}} to="/postlist">Back</Link>
              </NavItem>
        </Navbar>
        <Container>
          <Row>
            <Col className="clearfix">
              <h1 className="text-center">{projects.content}</h1>
            </Col>
          </Row>
          <Row>
            <img src={projects.pic}></img>
            <Col md="6">
            <ListGroup>
            <Card className="featureList">Awesome!! Looks just like Lydia!!!
              <hr/>

              <CardText>{comment} 2  {heart} 3 {like} 9  </CardText>
            </Card>
            <Card className="featureList">For the Dovahkiin!!!
              <hr/>

              <CardText>{comment} 0  {heart} 2 {like} 3  </CardText>
            </Card>
            <Card className="featureList">I used to be an adventurer like you...
              <hr/>

              <CardText>{comment} 0  {heart} 0 {like} 0  </CardText>
            </Card>
            <Card className="featureList">I ain't stealing your sweetroll!
              <hr/>

              <CardText>{comment} 10 {heart} 8 {like} 9 </CardText>
            </Card>
                </ListGroup>
                </Col>

          </Row>
        </Container>
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
