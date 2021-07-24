import React, { Component,Fragment } from 'react'
import HomeSlider from './HomeSlider'
import {Container,Row,Col} from 'react-bootstrap'

class HomeTopMobile extends Component {
     render() {
          return (
               <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                         <Row className="p-0 m-0 overflow-hidden"> 
                              <Col lg={12} md={12} sm={12}> 
                              <HomeSlider />
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default HomeTopMobile
