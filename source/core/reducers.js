
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {productReducer} from './product'
import {productTemplateReducer} from './productTemplate'

import {optionsReducer} from './options'
import {productsReducer} from './products'


export default combineReducers({
  form: formReducer,
  productTemplate: productTemplateReducer,
  product: productReducer,

  options: optionsReducer,
  products: productsReducer
})
