
const createValidate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  } else {
    const regex = new RegExp('^[a-z]+$', 'i')
    if (!regex.test(values.name)) {
      errors.name = 'Must be: a-z'
    }
  }
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.fields) {
    errors.fields = 'Required'
  }

  return errors
}


export default createValidate
