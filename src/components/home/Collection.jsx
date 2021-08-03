import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios'

class Collection extends Component {

     constructor(){
          super();
          this.state={
               ProductData:[]               
          }
     }


     componentDidMount(){
          axios.get(AppURL.ProductListByRemark("COLLECTION")).then(response =>{
               
               this.setState({ProductData:response.data});         

          }).catch(error=>{

          });
     } 


     render() {

          const CollectionList = this.state.ProductData;
          const MyView = CollectionList.map((CollectionList,i)=>{

          if(CollectionList.special_price=="na"){
               return   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
               <Card className="image-box card w-100">
               <img className="center w-75" src={CollectionList.image} />   
               <Card.Body> 
               <p className="product-name-on-card">{CollectionList.title}</p>
               <p className="product-price-on-card">Price : ${CollectionList.price}</p>
                    
               </Card.Body>
               </Card>          
               </Col>

          }
          else{

               return   <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
               <Card className="image-box card w-100">
               <img className="center w-75" src={CollectionList.image} />   
               <Card.Body> 
               <p className="product-name-on-card">{CollectionList.title}</p>
               <p className="product-price-on-card">Price : <strike className="text-secondary">${CollectionList.price}</strike> ${CollectionList.special_price}</p>
                    
               </Card.Body>
               </Card>          
               </Col>

          } 
 
          });




          return (
              <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

     <Row> 
               {MyView}
     </Row>
                   </Container>
              </Fragment>
          )
     }
}

export default Collection
