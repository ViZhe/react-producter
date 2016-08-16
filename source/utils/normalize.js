
const createNormalize = normalizes => (
  value => { // (value, previousValue, allValues)
    let result = value
    normalizes.forEach(({name, ...rest}) => {
      if (name === 'lower') {
        result = result.toLowerCase()
      }
      if (name === 'upper') {
        result = result.toUpperCase()
      }
      if (name === 'maxLength') {
        result = result.substr(0, rest.num)
      }
    })
    return result
  }
)

export default createNormalize
