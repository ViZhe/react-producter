
import React, {PropTypes} from 'react'

import {ProductListItem} from '~/containers'


const ProductList = ({products}) => {
  let tableStyle = {
    border: '1px solid black'
  }

  const productsList = products.data.map((product, index) =>
    <ProductListItem
      key={index}
      product={product}
    />
  )
  const productsEmpty = <tr><td colSpan='7' >Товаров нет</td></tr>
  const productsLoading = <tr><td colSpan='7' >Товары загружаются</td></tr>

  return (
    <div className='c-products-list' >
      <h2>Products List</h2>
      <table style={tableStyle} >
        <thead>
          <tr>
            <th>id</th>
            <th>o.name</th>
            <th>template</th>
            <th>edit</th>
            <th>isDeleted</th>
            <th>isActivated</th>
            <th>destroy</th>
          </tr>
        </thead>
        <tbody>
          {products.isLoading ? productsLoading : productsList || productsEmpty}
        </tbody>
      </table>
    </div>
  )
}


ProductList.propTypes = {
  products: PropTypes.object.isRequired
}

export default ProductList
