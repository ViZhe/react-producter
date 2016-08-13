
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'

import DynamicFieldAuto from './DynamicFieldAuto'


class DynamicForm extends Component {
  render() {
    const {groups, fields, handleSubmit, submitButtonText} = this.props
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
    const formWrap = (
      <form onSubmit={handleSubmit} >
        {formInner}
        <button>{submitButtonText || 'Отправить'}</button>
      </form>
    )
    return formInner ? formWrap : empty
  }
}


export default connect()(reduxForm({
  form: 'dynamicForm',
  enableReinitialize: true
})(DynamicForm))
