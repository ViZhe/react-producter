
import {fromJS} from 'immutable'

import {
  // ADD_PRODUCT,
  // DESTROY_PRODUCT,
  // UPDATE_PRODUCT,
  // UPDATE_PRODUCT_FIELD,
  // LOAD_PRODUCT,
  LOAD_PRODUCTS
} from './constants'


export const initialState = fromJS({
  // categories: {} // for foture: this catalog
  tempalte: {
    data: [],
    isLoading: true
  },
  list: {
    data: [
      // {
      //   template: String,
      //   isActivated: Boolean,
      //   isDeleted: Boolen,
      //   createdAt: timestamp,
      //   updateAt: timestamp,
      //   images: [
      //     {
      //       name: '',
      //       i300x300: '' // TODO: think
      //     }
      //   ],
      //   options: {
      //     name: 'value'
      //   }
      // }
    ],
    isLoading: true
  }
})

export function productsReducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_PRODUCTS:
      return state.withMutations(oldState => {
        oldState
          .set('data', action.payload)
          .set('isLoading', false)
      })

    default:
      return state
  }
}
