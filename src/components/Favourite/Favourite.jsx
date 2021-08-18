import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import cogoToast from 'cogo-toast';

class Favourite extends Component {
     constructor(){
          super();
          this.state={
               ProductData:[],
               isLoading:"",
               mainDiv:"d-none",
               PageRefreshStatus:false,
                              
          }
     }


     componentDidMount(){
          window.scroll(0,0)
          axios.get(AppURL.FavouriteList(this.props.user.email)).then(response =>{               
               this.setState({ProductData:response.data,isLoading:"d-none",
               mainDiv:" "});         

          }).catch(error=>{

          });
     } 

     removeItem = (event) => {
          let product_code = event.target.getAttribute('data-code');
          let email = this.props.user.email

          axios.get(AppURL.FavouriteRemove(product_code,email)).then(response =>{               
              cogoToast.success("Product Item Remove",{position:'top-right'});   
              this.setState({PageRefreshStatus:true})       
 
          }).catch(error=>{
               cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
          });

     } // end Remove Item Mehtod 


     PageRefresh =() => {
          if(this.state.PageRefreshStatus===true){
               let URL = window.location;
               return (
                    <Redirect to={URL} />
               )
          }
     }

     render() { 

          if(!localStorage.getItem('token')){
               return <Redirect to="/login" />
          }

          const FevList = this.state.ProductData;
          const MyView = FevList.map((ProductList,i)=>{
               return <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
               <Card className="image-box card w-100">
               <img className="center w-75" src={ProductList.image} />   
               <Card.Body> 
               <p className="product-name-on-card">{ProductList.product_name}</p>
                
                 <Button onClick={this.removeItem} data-code={ProductList.product_code} className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>   
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
                   {this.PageRefresh()}
              </Fragment>
          )
     }
}

export default Favourite
