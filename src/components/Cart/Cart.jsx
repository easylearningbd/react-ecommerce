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
               PageRedirectStaus:false,

               confirmBtn:"Confirm Order",
               city:"",
               payment:"",
               name:"",
               address:""
                              
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


         cityOnChange = (event) => {
              let city = event.target.value;
              this.setState({city:city})
         }

         paymentMethodOnChange = (event) => {
          let payment = event.target.value;
          this.setState({payment:payment})
     }

     nameOnChange = (event) => {
          let name = event.target.value;
          this.setState({name:name})
     }

     addressOnChange = (event) => {
          let address = event.target.value;
          this.setState({address:address})
     }

     confirmOnClick = () => {
          let city = this.state.city;
          let payment = this.state.payment;
          let name = this.state.name;
          let address = this.state.address;
          let email = this.props.user.email;

          if(city.length===0){
               cogoToast.error("Please Select City",{position:'top-right'});
          }
          else if(payment.length===0){
               cogoToast.error("Please Select Payment",{position:'top-right'});
          }
          else if(name.length===0){
               cogoToast.error("Please Select Your Name",{position:'top-right'});
          }
          else if(address.length===0){
               cogoToast.error("Please Select Your Address",{position:'top-right'});
          }
          else{

               let invoice = new Date().getTime();
               let MyFromData = new FormData();
               MyFromData.append('city',city)
               MyFromData.append('payment_method',payment)
               MyFromData.append('name',name)
               MyFromData.append('delivery_address',address)
               MyFromData.append('email',email)
               MyFromData.append('invoice_no',invoice)
               MyFromData.append('delivery_charge',"00");

     axios.post(AppURL.CartOrder,MyFromData).then(response =>{ 

          if(response.data===1){
               cogoToast.success("Order Request Received",{position:'top-right'}); 
               this.setState({PageRedirectStaus:true})   
          }else{
               cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
          }
               }).catch(error=>{
                    cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
     
               });
          } 

     } // edn confim order method 

     
     PageRedirect = () => {
          if(this.state.PageRedirectStaus===true){
               return (
                    <Redirect to="/orderlist" />
               )

          }
     }


     render() { 


          if(!localStorage.getItem('token')){
               return <Redirect to="/login" />
          }

          const MyList = this.state.ProductData;
          let totalPriceSum=0;
          const MyView = MyList.map((ProductList,i)=>{
           totalPriceSum = totalPriceSum+parseInt(ProductList.total_price)    
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

                   <Container fluid={true}>   

    <div className="section-title text-center mb-55"><h2>Product Cart List</h2>   
          </div>



                   <Row> 
     <Col className="p-1" lg={7} md={7} sm={12} xs={12} >
         {MyView}
     </Col> 


     <Col className="p-1" lg={5} md={5} sm={12} xs={12} >
     <div className="card p-2">
               <div className="card-body">
                    <div className="container-fluid ">
                         <div className="row">
<div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
     <h5 className="Product-Name text-danger">Total Due: {totalPriceSum}  $</h5>
</div>
</div>
<div className="row">
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label className="form-label">Choose City</label>
     <select onChange={this.cityOnChange} className="form-control">
     <option value="">Choose</option>
     <option value="Dhaka">Assam</option>
     <option value="Dhaka">Bihar </option>
     <option value="Dhaka">Goa </option>
     <option value="Dhaka">Gujarat </option>
     <option value="Dhaka">Himachal Pradesh </option>
     <option value="Dhaka">Punjab  </option>
     </select>
</div>
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label className="form-label">Choose Payment Method</label>
     <select onChange={this.paymentMethodOnChange}  className="form-control">
     <option value="">Choose</option>
     <option value="Cash On Delivery">Cash On Delivery</option>
     <option value="Cash On Delivery">Stripe</option>
     </select>
</div>
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label className="form-label">Your Name</label>
     <input onChange={this.nameOnChange}  className="form-control" type="text" placeholder=""/>
</div>

<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label className="form-label">Delivery Address</label>
     <textarea onChange={this.addressOnChange}   rows={2}  className="form-control" type="text" placeholder=""/>
</div>
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <button onClick={this.confirmOnClick}  className="btn  site-btn"> {this.state.confirmBtn} </button>
</div>
</div>
                    </div>
               </div>
               </div>
     </Col> 






                   </Row>

               </Container>

            {this.PageRefresh()}
            
            {this.PageRedirect()}

              </Fragment>
          )
     }
}

export default Cart
