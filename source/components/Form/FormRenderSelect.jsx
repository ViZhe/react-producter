
import React from 'react'


const FormRenderSelect = ({title, children, meta: {touched, error}, input, ...rest}) => (
  <label>
    {title}
    {touched && (error ? <span>✘ - {error}</span> : <span>✔</span>)}
    <br />
    <select {...rest} {...input} >
      {children}
    </select>
    <br />
  </label>
)


export default FormRenderSelect
