import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Login from '../../assets/images/login.png'
import { Link, Redirect } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import axios from 'axios'

class UserLogin extends Component {

     constructor(){
          super();
          this.state={
               email:'',
               password:'',
               message:'',
               loggedIn:false
          }
     } 

     // Login Form Submit Method 
     formSubmit = (e) => {
          e.preventDefault();
          const data={
               email:this.state.email,
               password:this.state.password
          }

          axios.post(AppURL.UserLogin,data).then(response =>{ 
            
               localStorage.setItem('token',response.data.token);
               this.setState({loggedIn:true})
               this.props.setUser(response.data.user);
               
          }).catch(error=>{

          }); 

     }



     render() {

           /// After Login Redirect to Profile Page 
           if(this.state.loggedIn){
                return <Redirect to={'/profile'} />
           }

           if(localStorage.getItem('token')){
               return <Redirect to="/profile" />
          }


          return (
     <Fragment>
          <Container>
               <Row className="p-2">
       <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

               <Row className="text-center">
        <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
          <Form className="onboardForm" onSubmit={this.formSubmit} >
               <h4 className="section-title-login"> USER SING IN </h4>
               
               <input className="form-control m-2" type="email" placeholder="Enter Your Email" onChange={(e)=>{this.setState({email:e.target.value})}} />

               <input className="form-control m-2" type="password" placeholder="Enter Your Password"  onChange={(e)=>{this.setState({password:e.target.value})}} />


               <Button type="submit" className="btn btn-block m-2 site-btn-login"> Login </Button>

               <br></br> <br></br>
     <hr />
     <p> <b> Forget My Password? </b><Link to="/forget"><b> Froget Password </b> </Link> </p>

     <p> <b> Don't Have An Account ? </b><Link to="/register"><b> Register </b> </Link> </p>
               
          </Form>


                    </Col>

       <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                         <img className="onboardBanner" src={Login} />
                    </Col>
               </Row>






                    </Col>
               </Row>
          </Container>
     </Fragment>
          )
     }
}

export default UserLogin
