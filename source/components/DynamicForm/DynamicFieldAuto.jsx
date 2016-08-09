
import React from 'react'
import {Field} from 'redux-form'


const renderFieldDefault = ({title, meta: {touched, error}, input, ...rest}) => {
  let field

  if (rest.type === 'textarea') {
    field = <textarea {...rest} {...input} />
  } else {
    field = <input {...rest} {...input} />
  }

  return (
    <label>
      {title}
      {field}
      {touched && error && <span>{error}</span>}
      <br />
    </label>
  )
}

const DynamicFieldAuto = ({...field}) => {
  let output

  switch (field.type) {
    // case 'checkbox':
    //   output = <Field component={renderFieldCheckbox} {...field} />
    //   break
    // case 'radio':
    //   output = <Field component={renderFieldRadio} {...field} />
    //   break
    // case 'select':
    //   output = <Field component={renderFieldSelect} {...field} />
    //   break
    default:
      output = <Field component={renderFieldDefault} {...field} />
  }

  return output
}


export default DynamicFieldAuto
