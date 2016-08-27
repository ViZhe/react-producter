
import {
  CREATE_PRODUCT_TEMPLATE,
  DESTROY_PRODUCT_TEMPLATE,
  FETCH_PRODUCT_TEMPLATE_LIST,
  UPDATE_PRODUCT_TEMPLATE
} from './constants'


export const createProductTemplate = data => ({
  type: CREATE_PRODUCT_TEMPLATE,
  payload: data
})

export const destroyProductTemplate = data => ({
  type: DESTROY_PRODUCT_TEMPLATE,
  payload: data
})

export const fetchProductTemplateList = () => (
  dispatch => {
    dispatch({type: FETCH_PRODUCT_TEMPLATE_LIST})

    // TODO: helper fuction fetchAction(link, type, dispatch)
    return fetch()
      .then(res => dispatch({
        type: `${FETCH_PRODUCT_TEMPLATE_LIST}_SUCCESS`,
        payload: res.json()
      }))
      .catch(err => dispatch({
        type: `${FETCH_PRODUCT_TEMPLATE_LIST}_FAIL`,
        payload: err
      }))
  }
)

export const updateProductTemplate = data => ({
  type: UPDATE_PRODUCT_TEMPLATE,
  payload: data
})
