import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Navbar, NavbarBrand } from 'reactstrap'
import { Link } from 'react-router-dom'
import background from '../images/anvil.jpg'

  let picStyle = {
    height: "600px",
    maxWidth: "100%",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  let footerStyle = {
    position: "fixed",
    bottom: "0",
    color: "white"
  }

  const Login = () => {
    return(
      <div>
        <Navbar color="dark">
          <NavbarBrand style={{color: 'white'}}>Vulkans Forge</NavbarBrand>
        </Navbar>
      <Container>
          <Form onSubmit={this.handleSubmit}>

              <Label for="name-field">Name</Label>
              <Input
                type="text"
                name="name"
                id="name-field"
              />

              <Label for="password-field">Password</Label>
              <Input
                type="text"
                name="password"
                id="password-field"
              />

          </Form>
          <Link className="btn btn-primary" to="/postlist">Login</Link>


        <Col style={ picStyle } md="10">

        </Col>
      </Container>
        <Navbar style={ footerStyle } color="dark">
          <NavbarBrand>some stuff</NavbarBrand>
        </Navbar>
      </div>
    )
  }
  export default Login
