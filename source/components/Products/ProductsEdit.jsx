
import React from 'react'

import {FormField} from '~/components'


const ProductsEdit = ({isLoading, groups, fields, handleSubmit, textSubmitButton}) => {
  const empty = <div>Данные загружаются</div>
  const form = (
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
      <button>{textSubmitButton}</button>
    </form>
  )

  return (
    <div>
      <h2>Product Edit</h2>
      {isLoading ? empty : form}
    </div>
  )
}


export default ProductsEdit
