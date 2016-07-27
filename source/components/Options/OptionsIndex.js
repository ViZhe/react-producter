
import React, {Component} from 'react'

import {
  OptionsFieldsAdd,
  OptionsFieldsList,
  OptionsGroupsList,
  OptionsTemplatesList
} from '~/containers'

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
