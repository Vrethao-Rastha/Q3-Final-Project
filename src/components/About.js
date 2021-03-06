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
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import background from '../images/oldKeys.jpg'

  // let picStyle = {
  //   height: "100vh",
  //   maxWidth: "100%",
  //   backgroundColor: "black",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   marginTop: "90px",
  //   marginBottom: "20px",
  //   border: "1px solid white"
  // }

  const About = (props) => {
    if(props.about[0]){
      return(
        <div>
          <div className="pic"></div>
          <Navbar style={{marginBottom: "20px"}} color="dark">
            <NavbarBrand className="coolText" style={{color: 'white', fontSize: "30px"}}>
              <i className="fa fa-wrench fa-lg fa-fw"></i>
              Vulkans Forge
            <i className="fa fa-cog fa-spin fa-lg fa-fw"></i>
            </NavbarBrand>
            <NavItem style={{listStyleType: "none"}}>
                  <Link style={{color: 'white'}} to="/"> Home</Link>
                </NavItem>
          </Navbar>
          <Container>
            <Col>

         </Col>

          <Col className="clearfix" md="12">
            <h1 style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}} className="text-center blah">Welcome to Vulkans Forge</h1>
            <p className="otherText" style={{paddingLeft: "20px", paddingRight: "20px" }}>{props.about[0].about}</p>
          </Col>
        </Container>
          <Navbar className="foot" color="dark">
            <NavbarBrand className="font-face" style={{color: "white"}}>&copy; 2018 Red Rocket Productions <i style={{color:"red"}} className="fa fa-rocket fa-2x"> </i>


            </NavbarBrand>
          </Navbar>
        </div>
      )
    }else {
      return(
        <div>woeuhbfewiusbdv</div>
      )
    }
  }

  const mapStateToProps = state => ({
    about: state.about
  })

  export default connect(mapStateToProps)(About)
