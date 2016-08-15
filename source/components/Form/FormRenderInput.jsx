
import React from 'react'


const FormRenderInput = ({title, meta: {touched, error}, input, ...rest}) => (
  <label>
    {title}
    {touched && (error ? <span>✘ - {error}</span> : <span>✔</span>)}
    <br />
    <input {...rest} {...input} />
    <br />
  </label>
)


export default FormRenderInput
