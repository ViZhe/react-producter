
import React, {Component} from 'react'

import {
  OptionsFieldsList,
  OptionsGroupsList
} from '~/containers'


export default class OptionsIndex extends Component {
  render() {
    return <div>
      <h2>Options Index</h2>

      <OptionsFieldsList />
      <OptionsGroupsList />
    </div>
  }
}
