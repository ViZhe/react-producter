
import React, {Component} from 'react'

import {OptionsGroupsListItem} from '~/components'
import * as hz from '~/api/horizon/helpers'


class OptionsGroupsListItemContainer extends Component {
  destroyGroup = () => {
    const id = this.props.group.id
    /* eslint-disable no-alert */
    const isAgree = confirm(`ID: ${id}\nReally want to destroy the group?`)
    /* eslint-enable no-alert */

    if (isAgree) {
      hz.optionsGroups.remove(id).subscribe(
        res => console.info(`Destroy - Group - Success\nID: "${res.id}"`),
        err => console.error(`Destroy - Group - Fail\nError: "${err}"`)
      )
    }
  }
  render() {
    return (
      <OptionsGroupsListItem
        destroyHandler={this.destroyGroup}
        {...this.props}
      />
    )
  }
}


export default OptionsGroupsListItemContainer
