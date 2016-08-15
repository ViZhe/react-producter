
import React from 'react'

import {FormField} from '~/components'


const ProductsAdd = ({
    groups, fields, handleSubmit, submitButtonText, templates, selectTemplateHandler
  }) => (
  <div>
    <h2>Add Product</h2>

    <p><b>Select template:</b></p>
    <select onChange={selectTemplateHandler}>
      {templates.map(({name, title}, index) =>
        <option key={index} value={name}>{title}</option>
      )}
    </select>

    <p><b>Create product:</b></p>
    <form onSubmit={handleSubmit} >
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} >
          <div>{groupIndex}) <b>{group.title} - ({group.fields.length})</b></div>

          {fields.filter(field => group.fields.indexOf(field.id) >= 0)
            .sort((a, b) => a.title > b.title) // TODO: ability to change the order
            .map(({type, name, title, placeholder}, fieldIndex) => (
              <FormField
                key={fieldIndex}
                title={title}
                type={type}
                name={name}
                placeholder={placeholder}
                // normalize={value => value.toUpperCase()}
              />
            )
          )}
        </div>
      ))}
      <button>{submitButtonText}</button>
    </form>
  </div>
)


export default ProductsAdd
