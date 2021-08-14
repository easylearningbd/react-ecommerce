import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import axios from 'axios'

class SuggestedProduct extends Component {

     constructor(){
          super();
          this.state={
               ProductData:[],
          }
     }

     componentDidMount(){ 
          let subcategory = this.props.subcategory;

          axios.get(AppURL.SimilarProduct(subcategory)).then(response =>{
               
               this.setState({ProductData:response.data});         

          }).catch(error=>{

          });
     }


     render() {

          const MyList = this.state.ProductData;

          if(MyList.length>0){
               const MyView = MyList.map((ProductList,i)=>{

                    if(ProductList.special_price=="na"){
                         return  <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                         <Link className="text-link" to={"/productdetails/"+ProductList.id} >
              <Card className="image-box card">
              <img className="center" src={ProductList.image} />   
              <Card.Body> 
             <p className="product-name-on-card">{ProductList.title}</p>
              <p className="product-price-on-card">Price : ${ProductList.price}</p>
                              
              </Card.Body> 
               </Card>
               </Link>
                    </Col>
          
                    }
                    else{
          
                         return  <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                           <Link className="text-link" to={"/productdetails/"+ProductList.id} >
              <Card className="image-box card">
              <img className="center" src={ProductList.image} />   
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
               <div className="section-title text-center mb-55"><h2>YOU MAY ALSO LIKE </h2>
               <p>Some Of Our Exclusive Collection, You May Like</p>
               </div>
     
      
          <Row> 
               {MyView}
         </Row>
     
     
                        </Container>
     
                   </Fragment>
               ) 


          } // end if conditon 
          else{


               return (
                    <Fragment>
                        <Container className="text-center" fluid={true}>
               <div className="section-title text-center mb-55"><h2>YOU MAY ALSO LIKE </h2>
               <p>Some Of Our Exclusive Collection, You May Like</p>
               </div>
     
      
          <p>There have no similar product </p>
     
     
                        </Container>
     
                   </Fragment>
               ) 


          } // end else 



          
     }
}

export default SuggestedProduct
