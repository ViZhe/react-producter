
const createValidate = values => {
  const errors = {
    validate: {
      required: {},
      regex: {}
    }
  }

  if (!values.name) {
    errors.name = 'Required'
  }
  const validate = values.validate
  if (validate) {
    const required = validate.required
    if (required) {
      if (required.isActive && !required.title) {
        errors.validate.required.title = 'Required'
      }
    }
    const regex = validate.regex
    if (regex) {
      if (regex.isActive && !regex.title) {
        errors.validate.regex.title = 'Required'
      }
      if (regex.isActive && !regex.regex) {
        errors.validate.regex.regex = 'Required'
      }
    }
  }

  return errors
}


export default createValidate
