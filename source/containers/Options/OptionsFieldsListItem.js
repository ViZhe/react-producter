
import React, {Component} from 'react'

import {OptionsFieldsListItem} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsFieldsListItemContainer extends Component {
  destroyField = () => {
    const id = this.props.field.id
    const isAgree = confirm(`ID: ${id}\nReally want to destroy the field?`) // eslint-disable-line no-alert

    if (isAgree) {
      hz.optionsFields.remove(id).subscribe(
        res => console.info(`Destroy - Field - Success\nId: "${res.id}"`),
        err => console.error(`Destroy - Field - Fail\nError: "${err}"`)
      )
    }
  }
  render() {
    return <OptionsFieldsListItem
      destroyHandler={this.destroyField}
      {...this.props}
      />
  }
}


export default OptionsFieldsListItemContainer
