import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser';

export class Purchase extends Component {
     constructor(){
          super();
          this.state={
               purchase:""
          }
     }

     componentDidMount(){
          axios.get(AppURL.AllSiteInfo).then(response =>{
               let StatusCode = response.status;
               if(StatusCode==200){
                    let JsonData = (response.data)[0]['parchase_guide'];
                    this.setState({purchase:JsonData});
               } 

          }).catch(error=>{

          });
     }

     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
      <h4 className="section-title-login">Purchase Page </h4>
      <p className="section-title-contact">
      { ReactHtmlParser(this.state.purchase) }
      </p>
     
     
                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Purchase
