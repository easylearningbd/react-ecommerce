import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button} from 'react-bootstrap';
import Logo from '../../assets/images/easyshop.png';
import {Link} from "react-router-dom";
 
   
 class NavMenuDesktop extends Component {
     render() {
          return (
               <Fragment>
<div className="TopSectionDown">
<Navbar fixed={"top"} className="navbar" bg="light">

    <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
         <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
              <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                   <div className="input-group w-100">
                   <input type="text" className="form-control" />
                   <Button type="button" className="btn site-btn"><i className="fa fa-search"> </i> 
                   </Button>
                   </div>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                   <Link to="/" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup>                  
                   </Link>
                   <a className="btn"><i className="fa h4 fa-mobile-alt"></i></a>
                   <Link to="/" className="h4 btn">LOGIN</Link>
                   
                   <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Button>
              </Col>

         </Row>
   
    </Container>

  </Navbar>
  </div>

               </Fragment>
          )
     }
}

export default NavMenuDesktop
