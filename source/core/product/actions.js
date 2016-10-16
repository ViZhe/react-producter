
import {
  ADD_PRODUCT,
  DESTROY_PRODUCT,
  LOAD_PRODUCT,
  LOAD_PRODUCTS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FIELD
} from './constants'


export const loadProducts = data => ({
  type: LOAD_PRODUCTS,
  payload: data
})

export const loadProduct = data => ({
  type: LOAD_PRODUCT,
  payload: data
})

export const destroyProduct = data => ({
  type: DESTROY_PRODUCT,
  payload: data
})

export const updateProductField = data => ({
  type: UPDATE_PRODUCT_FIELD,
  payload: data
})

export const updateProduct = data => ({
  type: UPDATE_PRODUCT,
  payload: data
})

export const addProduct = data => ({
  type: ADD_PRODUCT,
  payload: data
})
