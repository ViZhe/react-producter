
import {fromJS} from 'immutable'

import {
  LOAD_PRODUCT_TEMPLATE_LIST
} from './constants'


export const initialState = fromJS({
  data: [
    // {
    //   name: String,
    //   title: String,
    //   fields: [
    //     {
    //       name: String
    //       title: String
    //       type: 'text',
    //       initialValue: String
    //       validate: [
    //         {
    //           type: 'required',
    //           title: String
    //         },
    //         {
    //           type: 'regex',
    //           regex: '^[0-9]*?$',
    //           title: String
    //         }
    //       ]
    //     }
    //   ]
    // }
  ],
  isFetching: false,
  error: ''
})

export function productTemplateReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT_TEMPLATE_LIST:
      return state.withMutations(tmpState => {
        tmpState
          .set('isFetching', true)
          .set('error', '')
      })

    case `${LOAD_PRODUCT_TEMPLATE_LIST}_FAIL`:
      return state.withMutations(tmpState => {
        tmpState
          .set('isLoading', false)
          .set('error', action.payload.message)
      })

    case `${LOAD_PRODUCT_TEMPLATE_LIST}_SUCCESS`:
      return state.withMutations(tmpState => {
        tmpState
          .set('data', action.payload)
          .set('isLoading', false)
          .set('error', '')
      })

    default:
      return state
  }
}
