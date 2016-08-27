
import React from 'react'


const ProductItem = ({product}) => {
  const params = JSON.stringify(product, null, ' ')

  return (
    <div>
      <h2>Product Item</h2>

      <pre>
        {params}
      </pre>
    </div>
  )
}


export default ProductItem
