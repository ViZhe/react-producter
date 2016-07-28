
import React from 'react'

import {
  OptionsGroupsList,
  OptionsTemplatesList
} from '~/containers'
import {
  OptionsFields
} from '~/components'


const OptionsIndex = ({children}) => {
  return <div>
    <h2>Options Index</h2>

    <OptionsFields />
    <OptionsGroupsList />
    <OptionsTemplatesList />
  </div>
}


export default OptionsIndex
