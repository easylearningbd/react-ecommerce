import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Forget from '../../assets/images/forget.jpg'

class ForgetPassword extends Component {
     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
     
                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
               <Form className="onboardForm">
                    <h4 className="section-title-login"> FORGET PASSWORD ? </h4>
                     

                    <input className="form-control m-2" type="email" placeholder="Enter Your Email" />
      
                    <Button className="btn btn-block m-2 site-btn-login"> Reset Password </Button>
   
                    
               </Form>
     
     
                         </Col>
     
            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                              <img className="onboardBanner" src={Forget} />
                         </Col>
                    </Row>
     
     
     
     
     
     
                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default ForgetPassword
