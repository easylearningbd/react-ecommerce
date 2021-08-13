import React, { Component } from 'react'
import { Fragment } from 'react'
import { Redirect } from 'react-router';

class Profile extends Component {
     render() { 

          let name;
          let email;
          if(this.props.user){
               name = this.props.user.name;
               email = this.props.user.email;
          }

          if(!localStorage.getItem('token')){
               return <Redirect to="/login" />
          }


          return (
              <Fragment>
                   <h1> User Profile Page </h1>

               <ul className="list-group">
<li className="list-group-item">Name :  {name} </li>
<li className="list-group-item">Email :  {email} </li>
               </ul>


              </Fragment>
          )
     }
}

export default Profile
