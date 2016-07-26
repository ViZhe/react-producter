
import React, {Component} from 'react'

import {
  OptionsFieldsList,
  OptionsGroupsList,
  OptionsTemplatesList
} from '~/containers'


export default class OptionsIndex extends Component {
  render() {
    return <div>
      <h2>Options Index</h2>

      <OptionsFieldsList />
      <OptionsGroupsList />
      <OptionsTemplatesList />
    </div>
  }
}
