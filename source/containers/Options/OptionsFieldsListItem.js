
import React, {Component} from 'react'

import {OptionsFieldsListItem} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsFieldsListItemContainer extends Component {
  destroyField() {
    hz.optionsFields.remove(this.props.field.id).subscribe(
      result => console.info(`Destroy - Field - Success\nId: "${result.id}"`),
      err => console.error(`Destroy - Field - Fail\nError: "${err}"`)
    )
  }
  render() {
    return <OptionsFieldsListItem
      destroyHandler={::this.destroyField}
      {...this.props}
      />
  }
}


export default OptionsFieldsListItemContainer
