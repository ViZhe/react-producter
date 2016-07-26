
import React, {Component} from 'react'

import {AddProduct} from '~/components'
import {ProductsList} from '~/containers'


export default class Home extends Component {
  render() {
    return <div>
      <h2>Home</h2>

      <AddProduct />
      <ProductsList />
    </div>
  }
}
