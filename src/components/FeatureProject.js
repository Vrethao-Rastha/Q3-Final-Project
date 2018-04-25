import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Col,
  ListGroup,
  Row,
  FormGroup,
  Form,
  Label,
  ListGroupItem,
  Input,
  Button,
  Navbar,
  NavbarBrand
} from 'reactstrap'

const FeatureProject = ({ projects }) => {
  console.log('projects:', projects)
  if(projects){
    return(
      <div>
        <Navbar style={{marginBottom: "20px"}} color="dark">
          <NavbarBrand className="font-face" style={{color: 'white', fontSize: "30px"}}>
            Vulkans Forge
            <i class="fa fa-cog fa-spin fa-lg fa-fw"></i>
          </NavbarBrand>
        </Navbar>
        <ListGroupItem>{projects.content}</ListGroupItem>
        <img src={projects.pic}></img>
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
