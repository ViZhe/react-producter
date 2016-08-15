
import React from 'react'
import {Field} from 'redux-form'

import FormRenderSelect from './FormRenderSelect'
import FormRenderInput from './FormRenderInput'

const FormField = ({type, ...data}) => {
  let output

  switch (type) {
    // case 'checkbox':
    //   output = <Field component={renderFieldCheckbox} {...field} />
    //   break
    // case 'radio':
    //   output = <Field component={renderFieldRadio} {...field} />
    //   break
    case 'select':
      output = <Field component={FormRenderSelect} {...data} />
      break
    // case 'textarea':
    //   output = <Field component={FormRenderTextArea} {...data} />
    //   break
    default:
      output = <Field component={FormRenderInput} type={type} {...data} />
  }

  return output
}


export default FormField
