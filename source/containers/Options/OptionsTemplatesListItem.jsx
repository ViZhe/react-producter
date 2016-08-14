
import React, {Component} from 'react'

import {OptionsTemplatesListItem} from '~/components'
import * as hz from '~/api/horizon/helpers'


class OptionsTemplatesListItemContainer extends Component {
  destroyTemplate = () => {
    const id = this.props.template.id
    /* eslint-disable no-alert */
    const isAgree = confirm(`ID: ${id}\nReally want to destroy the template?`)
    /* eslint-enable no-alert */

    if (isAgree) {
      hz.optionsTemplates.remove(this.props.template.id).subscribe(
        res => console.info(`Destroy - Group - Success\nID: "${res.id}"`),
        err => console.error(`Destroy - Group - Fail\nError: "${err}"`)
      )
    }
  }
  render() {
    return (
      <OptionsTemplatesListItem
        destroyHandler={this.destroyTemplate}
        {...this.props}
      />
    )
  }
}


export default OptionsTemplatesListItemContainer
