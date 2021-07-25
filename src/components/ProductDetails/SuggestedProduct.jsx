import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SuggestedProduct extends Component {
     render() {
          return (
               <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2>YOU MAY ALSO LIKE </h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>


     <Row>
     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
          <Link to="/productdetails">
     <Card className="image-box card">
          <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>
               
          </Card.Body>
          </Card>
          </Link>
     </Col>



     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
     <Card className="image-box card">
          <img className="center" src="https://rukminim1.flixcart.com/image/416/416/knm2s280/mobile/j/x/c/hot-10-play-x688b-infinix-original-imag29gxqzuxkmnk.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Blue, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>
               
          </Card.Body>
          </Card>
     </Col>

     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
     <Card className="image-box card">
          <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/g/r/g/c21-rmx3201-realme-original-imagfxfwn9aryyda.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>
               
          </Card.Body>
          </Card>
     </Col>


     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
     <Card className="image-box card">
          <img className="center" src="https://rukminim1.flixcart.com/image/416/416/knm2s280/mobile/v/l/u/hot-10-play-x688b-infinix-original-imag29hfaedkgdfe.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>
               
          </Card.Body>
          </Card>
     </Col>


     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
     <Card className="image-box card">
          <img className="center" src="https://rukminim1.flixcart.com/image/416/416/knrsjgw0/mobile/f/o/w/8-5g-rmx3241-realme-original-imag2d8eksc2szzy.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>
               
          </Card.Body>
          </Card>
     </Col>


     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
     <Card className="image-box card">
          <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kd69z0w0/mobile/a/n/g/mi-redmi-note-9-b086982zkf-original-imafu4qf8gfcutde.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>
               
          </Card.Body>
          </Card>
     </Col>

 
</Row>


                   </Container>

              </Fragment>
          ) 
     }
}

export default SuggestedProduct
