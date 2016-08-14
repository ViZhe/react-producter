
import React from 'react'

import {
  Products
} from '~/containers'
import {
  ProductsIndex
} from '~/components'


const Home = () => (
  <div>
    <h2>Home</h2>

    <Products>
      <ProductsIndex />
    </Products>
  </div>
)


export default Home
