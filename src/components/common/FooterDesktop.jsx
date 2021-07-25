import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class FooterDesktop extends Component {
     render() {
          return (
               <Fragment>
       <div className="footerback m-0 mt-5 pt-3 shadow-sm"> 
                    <Container>
     <Row className="px-0 my-5">
          <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
               <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
               <p>1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104 <br></br>
               Email: Support@easylearningbd.com
               </p>
               <h5 className="footer-menu-title">SOCIAL LINK</h5>
               <a href=""><i className="fab m-1 h4 fa-facebook"></i></a>
               <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
               <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
          </Col>

          <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
          <h5 className="footer-menu-title">THE COMPANY</h5>
          </Col>

          <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
          <h5 className="footer-menu-title">MORE INFO</h5>
          </Col>

          <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
          <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
          </Col>

     </Row>
                    </Container>

                    </div>

               </Fragment>
          )
     }
}

export default FooterDesktop
