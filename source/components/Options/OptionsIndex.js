
import React from 'react'

import {
  OptionsFieldsAdd,
  OptionsFieldsList,
  OptionsGroupsList,
  OptionsTemplatesList
} from '~/containers'


const OptionsIndex = ({children}) => {
  return <div>
    <h2>Options Index</h2>

    <OptionsFieldsAdd />
    <OptionsFieldsList />
    <OptionsGroupsList />
    <OptionsTemplatesList />
  </div>
}


export default OptionsIndex
