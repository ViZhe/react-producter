
import React, {Component} from 'react'

import {OptionsFieldsListItem} from '~/components'
import * as hz from '~/api/horizon/helpers'


class OptionsFieldsListItemContainer extends Component {
  handleDestroy = () => {
    const id = this.props.field.id
    /* eslint-disable no-alert */
    const isAgree = confirm(`ID: ${id}\nReally want to destroy the field?`)
    /* eslint-enable no-alert */

    if (isAgree) {
      hz.optionsFields.remove(id).subscribe(
        res => console.info(`Destroy - Field - Success\nID: "${res.id}"`),
        err => console.error(`Destroy - Field - Fail\nError: "${err}"`)
      )
    }
  }
  render() {
    return (
      <OptionsFieldsListItem
        handleDestroy={this.handleDestroy}
        {...this.props}
      />
    )
  }
}


export default OptionsFieldsListItemContainer
