
import fetchAction from '~/utils/fetchAction'

import {
  CREATE_PRODUCT_TEMPLATE,
  DESTROY_PRODUCT_TEMPLATE,
  FETCH_PRODUCT_TEMPLATE_LIST,
  UPDATE_PRODUCT_TEMPLATE
} from './constants'


const apiUrl = '/api/0.0.1/product-template'

export const createProductTemplate = data => (
  dispatch => {
    console.log(CREATE_PRODUCT_TEMPLATE)

    return fetchAction({
      url: apiUrl,
      options: {
        method: 'POST',
        body: JSON.stringify(data)
      },
      type: CREATE_PRODUCT_TEMPLATE,
      dispatch
    })
  }
)

export const destroyProductTemplate = id => (
  dispatch => {
    console.log(DESTROY_PRODUCT_TEMPLATE)

    return fetchAction({
      url: `${apiUrl}/${id}`,
      options: {
        method: 'DELETE'
      },
      type: DESTROY_PRODUCT_TEMPLATE,
      dispatch
    })
  }
)

export const fetchProductTemplateList = () => (
  dispatch => {
    console.log(FETCH_PRODUCT_TEMPLATE_LIST)
    // dispatch({type: FETCH_PRODUCT_TEMPLATE_LIST})

    return fetchAction({
      url: apiUrl,
      options: {
        method: 'GET'
      },
      type: FETCH_PRODUCT_TEMPLATE_LIST,
      dispatch
    })
    // return fetch()
    //   .then(res => dispatch({
    //     type: `${FETCH_PRODUCT_TEMPLATE_LIST}_SUCCESS`,
    //     payload: res.json()
    //   }))
    //   .catch(err => dispatch({
    //     type: `${FETCH_PRODUCT_TEMPLATE_LIST}_FAIL`,
    //     payload: err
    //   }))
  }
)

export const updateProductTemplate = data => (
  dispatch => {
    console.log(UPDATE_PRODUCT_TEMPLATE)

    return fetchAction({
      url: `${apiUrl}/${data.id}`,
      options: {
        method: 'PUT',
        body: JSON.stringify(data)
      },
      type: UPDATE_PRODUCT_TEMPLATE,
      dispatch
    })
  }
)
