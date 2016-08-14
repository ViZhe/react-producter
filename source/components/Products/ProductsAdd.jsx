
import React from 'react'

import DynamicFieldAuto from '../DynamicForm/DynamicFieldAuto'


const ProductsAdd = ({
    groups, fields, handleSubmit, submitButtonText, templates, selectTemplateHandler
  }) => (
  <div className='c-area-list'>
    <h2>Add Product</h2>

    <p>Select template:</p>
    <select onChange={selectTemplateHandler}>
      {templates.map(({name, title}, index) =>
        <option key={index} value={name}>{title}</option>
      )}
    </select>

    <p>Create product:</p>
    <form onSubmit={handleSubmit} >
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className='b-dynamic-form__group' >
          <div className='b-dynamic-form__header' >{group.title} - ({group.fields.length})</div>

          {fields.filter(field => group.fields.indexOf(field.id) >= 0)
            .sort((a, b) => a.title > b.title) // TODO: ability to change the order
            .map(({type, name, title, placeholder}, fieldIndex) => (
              <DynamicFieldAuto // TODO: create new component
                key={fieldIndex}
                type={type}
                name={name}
                title={title}
                placeholder={placeholder}
                // normalize={value => value.toUpperCase()}
              />
            )
          )}
        </div>
      ))}
      <button>{submitButtonText || 'Отправить'}</button>
    </form>
    {/* <DynamicFormCreator
      template={template}
      onSubmit={addProductHandler}
      submitButtonText='Создать товар'
    /> */}
  </div>
)


export default ProductsAdd
