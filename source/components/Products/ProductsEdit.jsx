
import React from 'react'

import {DynamicFormCreator} from '~/components'


const ProductsEdit = ({product, updateProductHandler}) => (
  <div>
    <h2>Edit Product - {this.props.params.id}</h2>

    <DynamicFormCreator
      product={product}
      template={product.template}
      onSubmit={updateProductHandler}
      submitButtonText='Обновить товар'
    />
  </div>
)


export default ProductsEdit
