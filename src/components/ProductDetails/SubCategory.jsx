import React, { Component } from 'react'
import { Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SubCategory extends Component {
     render() {

          const MyList = this.props.ProductData;
          const Category = this.props.Category;
          const SubCategory = this.props.SubCategory;
          const MyView = MyList.map((ProductList,i)=>{

          if(ProductList.special_price=="na"){
               return   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                     <Link to={"/productdetails/"+ProductList.id} >
               <Card className="image-box card w-100">
               <img className="center w-75" src={ProductList.image} />   
               <Card.Body> 
               <p className="product-name-on-card">{ProductList.title}</p>
               <p className="product-price-on-card">Price : ${ProductList.price}</p>
                    
               </Card.Body>
               </Card> 
               </Link>         
               </Col>

          }
          else{

               return   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                      <Link to={"/productdetails/"+ProductList.id} >
               <Card className="image-box card w-100">
               <img className="center w-75" src={ProductList.image} />   
               <Card.Body> 
               <p className="product-name-on-card">{ProductList.title}</p>
               <p className="product-price-on-card">Price : <strike className="text-secondary">${ProductList.price}</strike> ${ProductList.special_price}</p>
                    
               </Card.Body>
               </Card> 
               </Link>         
               </Col>

          } 
 
          });




          return (
               <Fragment>
               <Container className="text-center" fluid={true}>
      <div className="section-title text-center mb-55"><h2> {Category } /  {SubCategory}  </h2>
      
      </div>

 <Row> 
           {MyView}
 </Row>
               </Container>
          </Fragment>
          )
     }
}

export default SubCategory
