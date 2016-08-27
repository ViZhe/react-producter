
import {cloneElement} from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'


const ProductFormContainer = ({children, onSubmit, handleSubmit}) => (
  cloneElement(children, {
    handleSubmit: handleSubmit(onSubmit)
  })
)


export default connect()(reduxForm({
  form: 'ProductForm',
  enableReinitialize: true
})(ProductFormContainer))
