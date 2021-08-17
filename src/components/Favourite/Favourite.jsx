import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import axios from 'axios'

class Favourite extends Component {
     constructor(){
          super();
          this.state={
               ProductData:[],
               isLoading:"",
               mainDiv:"d-none"
                              
          }
     }


     componentDidMount(){
          axios.get(AppURL.FavouriteList(this.props.user.email)).then(response =>{               
               this.setState({ProductData:response.data,isLoading:"d-none",
               mainDiv:" "});         

          }).catch(error=>{

          });
     } 


     render() { 

          const FevList = this.state.ProductData;
          const MyView = FevList.map((ProductList,i)=>{
               return <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
               <Card className="image-box card w-100">
               <img className="center w-75" src={ProductList.image} />   
               <Card.Body> 
               <p className="product-name-on-card">{ProductList.product_name}</p>
                
                 <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>   
               </Card.Body>
               </Card>          
               </Col> 
          });



          return (
               <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> MY FAVOURITE ITEMS</h2>
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

export default Favourite
