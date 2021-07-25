import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'

class Favourite extends Component {
     render() {
          return (
               <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> MY FAVOURITE ITEMS</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

     <Row>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Striped Men Hooded Neck Red</p>
          <p className="product-price-on-card">Price : $120</p>
            <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>   
          </Card.Body>
          </Card>          
          </Col>


          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/keykscw0-0/t-shirt/l/d/q/3xl-bmrgyrnful-z12-blive-original-imafvgzkyjghf7ba.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Striped Men Round Neck Maroon, Grey</p>
          <p className="product-price-on-card">Price : $120</p>
          <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button> 
               
          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/jt4olu80/t-shirt/v/7/v/xl-t-shirt-0068-eg-original-imafejrfpzjkxvkq.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Color Block Men Round Neck Grey</p>
          <p className="product-price-on-card">Price : $120</p>
          <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button> 
               
          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/kljrvrk0/t-shirt/q/r/0/l-trdhdful-d32-tripr-original-imagynnpg2fh62ht.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
          <p className="product-price-on-card">Price : $120</p>
          <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button> 
               
          </Card.Body>
          </Card>          
          </Col>

 
 

     </Row>
                   </Container>
              </Fragment>
          )
     }
}

export default Favourite
