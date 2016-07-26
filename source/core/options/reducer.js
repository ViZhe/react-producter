
import {fromJS} from 'immutable'

import {
  LOAD_OPTIONS,
  LOAD_OPTIONS_TEMPLATES,
  LOAD_OPTIONS_GROUPS,
  LOAD_OPTIONS_FIELDS
} from './constants'


export const initialState = fromJS({
  templates: [
    // for schema
    // {
    //   name: 'iAmTemplate',
    //   groups: ['groupId']
    // }
  ],
  groups: [
    // for schema
    // {
    //   name: 'iAmGroup',
    //   title: 'i am group',
    //   fields: ['fieldId']
    // }
  ],
  fields: [
    // for schema
    // {
    //   name: 'iAmField',
    //   title: 'I am field',
    //   type: 'text',
    //   default: 'defaultValue',
    //   validate: [
    //     {
    //       type: 'required',
    //       title: 'i required'
    //     },
    //     {
    //       type: 'regex',
    //       regex: '^[0-9]*?$',
    //       title: 'Only nums'
    //     }
    //   ]
    // }
  ],
  isLoading: false
})

export function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_OPTIONS:
      return state.withMutations(state => {
        state.set('templates', action.payload.templates)
        state.set('groups', action.payload.groups)
        state.set('fields', action.payload.fields)
        state.set('isLoading', false)
      })

    case LOAD_OPTIONS_TEMPLATES:
      return state.withMutations(state => {
        state.set('templates', action.payload)
      })

    case LOAD_OPTIONS_GROUPS:
      return state.withMutations(state => {
        state.set('groups', action.payload)
      })

    case LOAD_OPTIONS_FIELDS:
      return state.withMutations(state => {
        state.set('fields', action.payload)
      })

    default:
      return state
  }
}
