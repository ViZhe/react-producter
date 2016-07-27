
import React, {Component} from 'react'

import {
  OptionsFieldsList,
  OptionsGroupsList,
  OptionsTemplatesList
} from '~/containers'
import {
  OptionsFieldsAdd
} from '~/components'


export default class OptionsIndex extends Component {
  render() {
    return <div>
      <h2>Options Index</h2>

      <OptionsFieldsAdd />
      <OptionsFieldsList />
      <OptionsGroupsList />
      <OptionsTemplatesList />
    </div>
  }
}
