
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {optionsReducer} from './options'
import {productsReducer} from './products'


export default combineReducers({
  // form: formReducer.normalize({
  //     addAreaForm: {
  //         number: value => value && Number(value)
  //     }
  // }),
  form: formReducer,
  options: optionsReducer,
  products: productsReducer
})
