
import {
  LOAD_OPTIONS,
  LOAD_OPTIONS_TEMPLATES,
  LOAD_OPTIONS_GROUPS,
  LOAD_OPTIONS_FIELDS
} from './constants'


// export const loadOptions = data => {
//   return {
//     type: LOAD_OPTIONS,
//     payload: data
//   }
// }
export const loadOptions = data => ({
  type: LOAD_OPTIONS,
  payload: data
})

export const loadOptionsTemplates = data => ({
  type: LOAD_OPTIONS_TEMPLATES,
  payload: data
})

export const loadOptionsGroups = data => ({
  type: LOAD_OPTIONS_GROUPS,
  payload: data
})

export const loadOptionsFields = data => ({
  type: LOAD_OPTIONS_FIELDS,
  payload: data
})
