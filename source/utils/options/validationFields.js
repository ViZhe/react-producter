
const createValidate = values => {
  const errors = {
    validate: {
      required: {},
      regex: {}
    }
  }
  // TODO:
  // name: only latin symbols
  // all: lenght? 20?
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.type) {
    errors.type = 'Required'
  } else if (['text', 'textarea'].indexOf(values.type) === -1) {
    errors.type = 'Unregistered type'
  }
  if (!values.title) {
    errors.title = 'Required'
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
      if (regex.isActive) {
        if (!regex.title) {
          errors.validate.regex.title = 'Required'
        }
        if (!regex.regex) {
          errors.validate.regex.regex = 'Required'
        }
      }
    }
  }

  return errors
}


export default createValidate
