import React, { Component, Fragment } from 'react'

class MegaMenu extends Component {

     constructor(props){
          super();
           
     }
 

     MegaMenu(){
          var acc = document.getElementsByClassName("accordion");
          var accNum = acc.length;
          var i;
          for(i=0;i<accNum;i++){
               acc[i].addEventListener("click",function (){
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if(panel.style.maxHeight){
                         panel.style.maxHeight = null;
                    }else{
                         panel.style.maxHeight= panel.scrollHeight+ "px"
                    }
               })
          }
     }


     render() {

          const CatList = this.props.data;

          const MyView = CatList.map((CatList,i)=>{
               return <div key={i.toString()}>
      <button className="accordion">
      <img className="accordionMenuIcon" src={CatList.category_image} />&nbsp; {CatList.category_name}
                        </button>
          <div className="panel">
      <ul>
          <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
      </ul>
         </div> 
             
               </div>



          });





          return (
              <div className="accordionMenuDiv">
                   <div className="accordionMenuDivInside">

               {MyView}
   
                   </div>

              </div>
          )
     }
}

export default MegaMenu
