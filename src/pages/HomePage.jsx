import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'

export class HomePage extends Component {
     render() {
          return (
               <Fragment>
                    <FeaturedProducts />
                    <Collection />
                    <Categories />
               </Fragment>
          )
     }
}

export default HomePage
