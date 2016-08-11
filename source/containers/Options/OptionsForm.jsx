
import {cloneElement} from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'


const OptionsFormContainer = ({children, onSubmit, handleSubmit}) => (
  cloneElement(children, {
    handleSubmit: handleSubmit(onSubmit)
  })
)


export default connect()(reduxForm({
  form: 'OptionsForm'
})(OptionsFormContainer))
