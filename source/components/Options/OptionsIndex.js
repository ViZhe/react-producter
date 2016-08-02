
import React from 'react'

import {
  OptionsTemplatesList
} from '~/containers'
import {
  OptionsFields,
  OptionsGroups
} from '~/components'


const OptionsIndex = () => {
  return <div>
    <h2>Options Index</h2>

    <OptionsFields />
    <OptionsGroups />
    <OptionsTemplatesList />
  </div>
}


export default OptionsIndex
