import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button,Card} from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import Product1 from '../../assets/images/product/product1.png'
import axios from 'axios'

class Cart extends Component {

     constructor(){
          super();
          this.state={
               ProductData:[],
               isLoading:"",
               mainDiv:"d-none"
                              
          }
     }


     componentDidMount(){
          axios.get(AppURL.CartList(this.props.user.email)).then(response =>{
               
               this.setState({ProductData:response.data,isLoading:"d-none",
               mainDiv:" "});         

          }).catch(error=>{

          });
     } 


     render() { 

          const MyList = this.state.ProductData;
          const MyView = MyList.map((ProductList,i)=>{
               return <div>
               <Card >                
     <Card.Body>
     <Row>
          <Col md={3} lg={3} sm={6} xs={6}>
               <img className="cart-product-img" src={ProductList.image} />
          </Col>

          <Col md={6} lg={6} sm={6} xs={6}>
          <h5 className="product-name">{ProductList.product_name}</h5>
          <h6> Quantity = {ProductList.quantity} </h6>
          <p>{ProductList.size} | {ProductList.color}</p>
          <h6>Price = {ProductList.unit_price} x {ProductList.quantity} = {ProductList.total_price}$</h6>
          </Col>

          <Col md={3} lg={3} sm={12} xs={12}>
          
          <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>
          
          </Col>
     </Row>              
     </Card.Body>               
</Card>


               </div> 
          })



          return (
              <Fragment>

                   <Container>   

    <div className="section-title text-center mb-55"><h2>Product Cart List</h2>   
          </div>



                   <Row> 
     <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
         {MyView}
     </Col>  
                   </Row>

               </Container>


              </Fragment>
          )
     }
}

export default Cart
