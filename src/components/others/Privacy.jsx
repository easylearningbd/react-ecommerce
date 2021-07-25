import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'

class Privacy extends Component {
     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
      <h4 className="section-title-login">Privacy Page </h4>
      <p className="section-title-contact">
      Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.<br></br><br></br>

I am working online for the last 7 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.<br></br><br></br>

Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.<br></br>

Education makes the world a better place. Make your world better with new skills.
      </p>
     
     
                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Privacy
