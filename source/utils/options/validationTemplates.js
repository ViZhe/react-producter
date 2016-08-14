
const createValidate = values => {
  const errors = {}

  // TODO:
  // name: only latin symbols
  // all: length? 20?
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.groups) {
    errors.groups = 'Required'
  }

  return errors
}


export default createValidate
