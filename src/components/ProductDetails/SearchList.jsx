import React, { Component } from 'react'
import { Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class SearchList extends Component {
     render() {

          const MyList = this.props.ProductData;
          const SearchKey = this.props.SearchKey;
          const MyView = MyList.map((ProductList,i)=>{

          if(ProductList.special_price=="na"){
               return   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Link className="text-link" to={"/productdetails/"+ProductList.id} >
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
                     <Link className="text-link" to={"/productdetails/"+ProductList.id} >
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

               <div className="breadbody">
               <Breadcrumb>
  <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>

  <Breadcrumb.Item> <Link to={"/productbysearch/"+SearchKey}> Search For :  {SearchKey } </Link> </Breadcrumb.Item>   
</Breadcrumb>
</div>


      <div className="section-title text-center mb-40 mt-2"><h2> {SearchKey }  </h2>
      
      </div>

 <Row> 
           {MyView}
 </Row>
               </Container>
          </Fragment>
          )
     }
}

export default SearchList
