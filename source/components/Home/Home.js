
import React, {Component} from 'react'

import {
  AddProduct
} from '../'
import ProductsList from '~/containers/Products/ProductsList'


export default class Home extends Component {
  render() {
    return <div>
      <h2>Home</h2>

      <AddProduct />
      <ProductsList />
    </div>
  }
}
