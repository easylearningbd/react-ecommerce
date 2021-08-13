import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import Forget from '../../assets/images/forget.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class ResetPassword extends Component {

     constructor(){
          super(); 
          this.state={
               token:'',
               email:'',
               password:'',
               password_confirmation:'',
               message:'' 
              
          }
     } 


      // Reset Form Submit Method 
      formSubmit = (e) => {
          e.preventDefault();
          const data={
               token:this.state.token,
               email:this.state.email,
               password:this.state.password,
               password_confirmation:this.state.password_confirmation
          }

          axios.post(AppURL.UserResetPassword,data).then(response =>{ 
            
               this.setState({message:response.data.message})

               toast.success(this.state.message,{
                    position: "top-right"
               });
               document.getElementById("fromreset").reset();
               
          }).catch(error=>{
               this.setState({message:error.response.data.message})
               toast.error(this.state.message,{
                    position: "top-right"
               });
          }); 

     }


     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
     
                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
    <Form className="onboardForm"  onSubmit={this.formSubmit} id="fromreset" >
                    <h4 className="section-title-login"> RESET PASSWORD </h4>
                    
     <input className="form-control m-2" type="text" placeholder="Enter Your Pin Code" onChange={(e)=>{this.setState({token:e.target.value})}} />

     <input className="form-control m-2" type="email" placeholder="Enter Your Email"  onChange={(e)=>{this.setState({email:e.target.value})}} />

     <input className="form-control m-2" type="password" placeholder="Your New Password"  onChange={(e)=>{this.setState({password:e.target.value})}} />

     <input className="form-control m-2" type="password" placeholder="Confirm Your Password"  onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} />
     
     
        <Button type="submit" className="btn btn-block m-2 site-btn-login"> Reset Password </Button> 
                    
               </Form>
     
      
                         </Col>
     
            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                              <img className="onboardBanner" src={Forget} />
                         </Col>
                    </Row>
     
     
     
     
     
     
                         </Col>
                    </Row>
               </Container>
               <ToastContainer />
          </Fragment>
          )
     }
}

export default ResetPassword
