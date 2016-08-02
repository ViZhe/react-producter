
import React from 'react'

import {AddProduct} from '~/components'
import {ProductsList} from '~/containers'


const Home = () => {
  return <div>
    <h2>Home</h2>

    <AddProduct />
    <ProductsList />
  </div>
}


export default Home
