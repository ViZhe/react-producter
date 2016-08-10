
import React from 'react'

import {DynamicFormCreator} from '~/components'


const ProductsEdit = ({isLoading, product, updateProductHandler}) => (
  <div>
    <h2>Edit Product</h2>

    {!isLoading ? (
      <DynamicFormCreator
        product={product}
        template={product.template}
        onSubmit={updateProductHandler}
        submitButtonText='Обновить товар'
      />
    ) : 'Данные загружаются'}
  </div>

)


export default ProductsEdit
