import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button,Card} from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import Product1 from '../../assets/images/product/product1.png'
import axios from 'axios'
import cogoToast from 'cogo-toast';
import { Redirect } from 'react-router-dom';

class Cart extends Component {

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
          axios.get(AppURL.CartList(this.props.user.email)).then(response =>{
               
               this.setState({ProductData:response.data,isLoading:"d-none",
               mainDiv:" "});         

          }).catch(error=>{

          });
     } 


     removeItem = (id) => {

      axios.get(AppURL.RemoveCartList(id)).then(response =>{ 

     if(response.data===1){
          cogoToast.success("Cart Item Remove",{position:'top-right'}); 
          this.setState({PageRefreshStatus:true})   
     }else{
          cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
     }
          }).catch(error=>{
               cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});

          });

     } // End Remove Item Mehtod 

     PageRefresh =() => {
          if(this.state.PageRefreshStatus===true){
               let URL = window.location;
               return (
                    
                    <Redirect to={URL} />
               )
          }
     }

      

     ItemPlus = (id,quantity,price) => {

          axios.get(AppURL.CartItemPlus(id,quantity,price)).then(response =>{ 
    
         if(response.data===1){
              cogoToast.success("Item Quantity Increased",{position:'top-right'}); 
              this.setState({PageRefreshStatus:true})   
         }else{
              cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
         }
              }).catch(error=>{
                   cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
    
              });
    
         } // End ItemPlus Mehtod 


         ItemMinus = (id,quantity,price) => {

          axios.get(AppURL.CartItemMinus(id,quantity,price)).then(response =>{ 
    
         if(response.data===1){
              cogoToast.success("Item Quantity Decreased",{position:'top-right'}); 
              this.setState({PageRefreshStatus:true})   
         }else{
              cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
         }
              }).catch(error=>{
                   cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
    
              });
    
         } // End ItemMinus Mehtod 



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
          
          <Button onClick={()=>this.removeItem(ProductList.id)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-trash-alt"></i> </Button>

          <Button onClick={()=>this.ItemPlus(ProductList.id,ProductList.quantity,ProductList.unit_price)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-plus"></i> </Button>

          <Button onClick={()=>this.ItemMinus(ProductList.id,ProductList.quantity,ProductList.unit_price)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-minus"></i> </Button>
          
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

            {this.PageRefresh()}

              </Fragment>
          )
     }
}

export default Cart
