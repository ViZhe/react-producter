
import React from 'react'


const ProductsItem = ({product}) => {
  const params = JSON.stringify(product, null, ' ')

  return (
    <div>
      <h2>Products Item</h2>

      <pre>
        {params}
      </pre>
    </div>
  )
}


export default ProductsItem
