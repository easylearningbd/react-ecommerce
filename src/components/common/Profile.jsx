import React, { Component } from 'react'
import { Fragment } from 'react'

class Profile extends Component {
     render() {
          return (
              <Fragment>
                   <h1> User Profile Page </h1>

               <ul className="list-group">
<li className="list-group-item">Name :  Name </li>
<li className="list-group-item">Email :  Email </li>
               </ul>


              </Fragment>
          )
     }
}

export default Profile
