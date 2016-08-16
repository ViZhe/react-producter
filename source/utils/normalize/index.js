
import transliteration from './transliteration'


const createNormalize = normalizes => (
  value => { // (value, previousValue, allValues)
    let result = value
    normalizes.forEach(({name, ...rest}) => {
      if (name === 'translit') {
        result = transliteration(result)
      }
      // if (name === 'replace') {
      //   result = result.replace(rest.from, rest.to)
      // }
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
