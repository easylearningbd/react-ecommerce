import React, { Component } from 'react'
import { Fragment } from 'react'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import {Navbar,Container, Row, Col,Button,Card,Modal} from 'react-bootstrap';
export class OrderList extends Component {
     constructor(){
          super();
          this.state={
               ProductData:[],
               show:false,
               NotificationData:[],
               isLoading:"",
               mainDiv:"d-none",
               Notificationmsg:"",
               Notificationtitle:"",
               Notificationdate:"" 

          }
     }

     componentDidMount(){
          let email = this.props.user.email;
          axios.get(AppURL.OrderListByUser(email)).then(response =>{
               
               this.setState({ProductData:response.data});         

          }).catch(error=>{

          });
     } 


     handleClose = () =>{
          this.setState({ show:false})
      };  

      handleShow = (event) => {
           this.setState({ show:true });
           let Nmsg = event.target.getAttribute("data-message");
           let Ntitle = event.target.getAttribute("data-title");
           let Ndate = event.target.getAttribute("data-date");
           this.setState({Notificationmsg:Nmsg,Notificationtitle:Ntitle,Notificationdate:Ndate})
      }; 



     render() {

          const MyList = this.state.ProductData;         
          const MyView = MyList.map((ProductList,i)=>{
               return <div>
          <Col md={6} lg={6} sm={6} xs={6}>
          <h5 className="product-name">{ProductList.product_name}</h5>
          <h6> Quantity = {ProductList.quantity} </h6>
          <p>{ProductList.size} | {ProductList.color}</p>
          <h6>Price = {ProductList.unit_price} x {ProductList.quantity} = {ProductList.total_price}$</h6>
          <h6>Stauts = {ProductList.order_status} </h6>
          </Col>
          <Button onClick={this.handleShow} className="btn btn-danger">Post Review </Button>
<hr></hr>
               </div>



          });


          return (
               <Fragment>
                   <Container>
    <div className="section-title text-center mb-55"><h2>Order History </h2>
          
          </div>

                    <Card >                
               <Card.Body>
               <Row>
                    {MyView}
               
               </Row>              
               </Card.Body>               
          </Card>



                   </Container>



        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
           <h6><i className="fa fa-bell"></i> Post Your Review     </h6>
        </Modal.Header>
        <Modal.Body>
             <h6>review</h6>
             <p>
             review
             </p> 

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>



               </Fragment>
          )
     }
}

export default OrderList
