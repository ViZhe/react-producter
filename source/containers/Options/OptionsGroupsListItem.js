
import React, {Component} from 'react'

import {OptionsGroupsListItem} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsGroupsListItemContainer extends Component {
  destroyGroup = () => {
    const isAgree = confirm(`ID: ${this.props.group.id}\nReally want to destroy the group?`)  // eslint-disable-line no-alert
    if (isAgree) {
      hz.optionsGroups.remove(this.props.group.id).subscribe(
        res => console.info(`Destroy - Group - Success\nId: "${res.id}"`),
        err => console.error(`Destroy - Group - Fail\nError: "${err}"`)
      )
    }
  }
  render() {
    return <OptionsGroupsListItem
      destroyHandler={this.destroyGroup}
      {...this.props}
      />
  }
}


export default OptionsGroupsListItemContainer
