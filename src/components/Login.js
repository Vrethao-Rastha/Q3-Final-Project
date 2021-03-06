import React from 'react'
import { Container,
         Row,
         Col,
         Form,
         Label,
         Input,
         Navbar,
         NavItem,
         NavbarBrand } from 'reactstrap'
import { Link } from 'react-router-dom'
import background from '../images/art-black-and-white-contemporary-547117.jpg'

  let picStyle = {
    height: "700px",
    maxWidth: "100%",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "50px",
    marginBottom: "20px",
    border: "1px solid white"
  }

  const Login = () => {
    return(
      <div>
        <Navbar className="logNav" style={{marginBottom: "20px"}} color="dark">
          <NavbarBrand className="coolText" style={{color: 'red', fontSize: "30px"}}>
            <i className="fa fa-wrench fa-lg fa-fw"></i>
            Vulkans Forge
          <i className="fa fa-cog fa-spin fa-lg fa-fw"></i>
          </NavbarBrand>
          <NavItem style={{listStyleType: "none"}}>
            <Link style={{color: 'white', marginRight:"10px"}} to="/about">About</Link>
              </NavItem>
        </Navbar>
        <Container>
          <Col>
          <Row md="4">
          {/* <Label className="btns" style={{marginRight: "30px"}} for="name-field">Name</Label>
          <Form>
              <Input style={{marginRight: "10px"}}
                type="text"
                name="name"
                id="name-field"
              />
            </Form>

            <Label className="btns" style={{marginRight: "30px", marginLeft: "30px"}} for="password-field">Password</Label>
              <Form>
              <Input
                type="password"
                name="password"
                id="password-field"
              />
          </Form> */}
        </Row>
       </Col>

        <Col className="clearfix" style={ picStyle } md="12">
          <h1 style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black", color:"white"}} className="text-center blah">Vulkans Forge</h1>

        </Col>

        <Row>
          <Col md="12">

            <Link className="btn btn-secondary col-md-2 offset-md-5"
              to="/postlist">Enter</Link>
            </Col>

        </Row>




      </Container>
        <Navbar className="foot" color="dark">
          <NavbarBrand className="font-face" style={{color: "white"}}>&copy; 2018 Red Rocket Productions <i style={{color:"red"}} className="fa fa-rocket fa-2x"> </i>


          </NavbarBrand>
        </Navbar>
      </div>
    )
  }
  export default Login
