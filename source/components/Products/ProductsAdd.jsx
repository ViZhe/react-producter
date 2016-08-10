
import React from 'react'

import {DynamicFormCreator} from '~/components'


const ProductsAdd = ({template, templates, selectTemplateHandler, addProductHandler}) => (
  <div className='c-area-list'>
    <h2>Add Product</h2>

    <p>Select template:</p>
    <select onChange={selectTemplateHandler}>
      {templates.map(({name, title}, index) =>
        <option key={index} value={name}>{title}</option>
      )}
    </select>

    <p>Create product:</p>
    <DynamicFormCreator
      template={template}
      onSubmit={addProductHandler}
      submitButtonText='Создать товар'
    />
  </div>
)


export default ProductsAdd
