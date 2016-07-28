
import React from 'react'

import {
  OptionsFieldsAdd,
  OptionsFieldsList
} from '~/containers'


const OptionsFields = ({children}) => {
  return <div>
    <h2>Options Fields</h2>

    <OptionsFieldsAdd />
    <OptionsFieldsList />
  </div>
}


export default OptionsFields
