
import React from 'react'
import {reduxForm} from 'redux-form'
import {connect} from 'react-redux'

import DynamicFieldAuto from './DynamicFieldAuto'


const DynamicForm = ({groups, fields, handleSubmit, submitButtonText}) => {
  const formInner = groups.map((group, groupIndex) => (
    <div key={groupIndex} className='b-dynamic-form__group' >
      <div className='b-dynamic-form__header' >{group.title} - ({group.fields.length})</div>

      {fields.filter(field => group.fields.indexOf(field.id) >= 0)
        .sort((a, b) => a.title > b.title) // TODO: ability to change the order
        .map(({type, name, title, placeholder}, fieldIndex) => (
          <DynamicFieldAuto
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
  ))

  const empty = <div>Параметров нет.</div>
  const form = (
    <form onSubmit={handleSubmit} >
      {formInner}
      <button>{submitButtonText || 'Отправить'}</button>
    </form>
  )

  return formInner ? form : empty
}


export default connect()(reduxForm({
  form: 'dynamicForm'
})(DynamicForm))
