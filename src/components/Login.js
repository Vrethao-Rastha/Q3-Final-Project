import React from 'react'
import { Container, Row, Col, Form, Label, Input, Navbar, NavbarBrand } from 'reactstrap'
import { Link } from 'react-router-dom'
import background from '../images/art-black-and-white-contemporary-547117.jpg'

  let picStyle = {
    height: "800px",
    maxWidth: "100%",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginBottom: "20px",
    marginTop: "20px"
  }

  let footerStyle = {
    position: "fixed",
    bottom: "0",
  }

  const Login = () => {
    return(
      <div>
        <Navbar style={{marginBottom: "20px"}} color="dark">
          <NavbarBrand className="coolText" style={{color: 'white', fontSize: "30px"}}>
            <i className="fa fa-wrench fa-lg fa-fw"></i>
            Vulkans Forge
          <i className="fa fa-cog fa-spin fa-lg fa-fw"></i>
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

        <Col className="clearfix" style={ picStyle } md="12">
          <h1 className="text-center blah" style={{color: "white", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Welcome to Vulkans Forge</h1>

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
