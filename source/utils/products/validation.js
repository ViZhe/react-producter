
const createValidate = (validateList, values) => {
  const errors = {}

  Object.keys(validateList).forEach(key => {
    if (errors[key]) {
      return
    }
    const valRegex = validateList[key].regex
    const valRequired = validateList[key].required
    if (valRegex && valRegex.isActive) {
      const regex = new RegExp(valRegex.regex, 'i')
      if (!regex.test(values[key])) {
        errors[key] = valRegex.title
      }
    }
    if (valRequired && valRequired.isActive) {
      if (!values[key]) {
        errors[key] = valRequired.title
      }
    }

    // TODO: add more validators
  })

  return errors
}


export default createValidate
