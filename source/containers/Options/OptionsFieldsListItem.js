
import React, {Component} from 'react'

import {OptionsFieldsListItem} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsFieldsListItemContainer extends Component {
  destroyField() {
    const isAgree = confirm(`ID: ${this.props.field.id}\nReally want to destroy the field?`)  // eslint-disable-line no-alert
    if (isAgree) {
      hz.optionsFields.remove(this.props.field.id).subscribe(
        result => console.info(`Destroy - Field - Success\nId: "${result.id}"`),
        err => console.error(`Destroy - Field - Fail\nError: "${err}"`)
      )
    }
  }
  render() {
    return <OptionsFieldsListItem
      destroyHandler={::this.destroyField}
      {...this.props}
      />
  }
}


export default OptionsFieldsListItemContainer
