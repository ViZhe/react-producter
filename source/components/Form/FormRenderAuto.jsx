
import React from 'react'

import FormRenderInput from './FormRenderInput'
import FormRenderSelect from './FormRenderSelect'

const FormRenderAuto = ({type, ...data}) => {
  let output

  switch (type) {
    // case 'checkbox':
    //   output = <Field component={renderFieldCheckbox} {...field} />
    //   break
    // case 'radio':
    //   output = <Field component={renderFieldRadio} {...field} />
    //   break
    case 'select':
      output = <FormRenderSelect {...data} />
      break
    default:
      output = <FormRenderInput type={type} {...data} />
  }

  return output
}


export default FormRenderAuto
