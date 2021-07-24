import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'

export class HomePage extends Component {
     render() {
          return (   
               <Fragment> 
                    <NavMenuMobile />       
                    <HomeTop />  
                    <FeaturedProducts />
                    <NewArrival />
                    <Categories />
                    <Collection />
                    
               </Fragment>
          )
     }
}

export default HomePage
