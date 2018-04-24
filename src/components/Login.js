import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Navbar, NavbarBrand } from 'reactstrap'
import { Link } from 'react-router-dom'
import background from '../images/art-black-and-white-contemporary-547117.jpg'

  let picStyle = {
    height: "800px",
    maxWidth: "100%",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "20px",
    marginBottom: "20px"
  }

  let footerStyle = {
    position: "fixed",
    bottom: "0",
  }

  const Login = () => {
    return(
      <div>
        <Navbar style={{marginBottom: "20px"}} color="dark">
          <NavbarBrand className="font-face" style={{color: 'white', fontSize: "30px"}}>
            Vulkans Forge
          <i class="fa fa-cog fa-spin fa-lg fa-fw"></i>
          </NavbarBrand>
        </Navbar>
        <Container>
          <Col>
          <Row md="4">
          <Label style={{marginLeft: "10px"}} for="name-field">Name</Label>
          <Form onSubmit={this.handleSubmit}>
              <Input style={{marginRight: "10px"}}
                type="text"
                name="name"
                id="name-field"
              />
            </Form>

            <Label style={{marginLeft: "10px"}} for="password-field">Password</Label>
              <Form>
              <Input 
                type="text"
                name="password"
                id="password-field"
              />
          </Form>
          <Link style={{marginLeft: "10px"}} className="btn btn-primary" to="/postlist">Login</Link>
        </Row>
       </Col>

        <Col style={ picStyle } md="10">

        </Col>
      </Container>
        <Navbar style={ {footerStyle} } color="dark">
          <NavbarBrand className="font-face" style={{color: "white"}}>&copy; 2018 Red Rocket Productions

          </NavbarBrand>
        </Navbar>
      </div>
    )
  }
  export default Login
