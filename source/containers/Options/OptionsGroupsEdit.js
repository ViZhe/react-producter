
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'

import {OptionsGroupsEdit} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsGroupsEditContainer extends Component {
  updateGroup = groupData => {
    if (Object.keys(groupData).length > 0) {
      hz.optionsGroups.update({
        ...groupData,
        id: this.props.params.id
      }).subscribe(
        result => console.info(`Update - Group - Success\nId: "${result.id}".`),
        err => console.error(`Update - Group - Fail: ${err}`)
      )
    } else {
      console.info('updateGroup', 'Поля не изменились.')
    }
  }
  render() {
    const group = this.props.options.groups.filter(group =>
      group.id === this.props.params.id
    )[0]

    return <OptionsGroupsEdit
      group={group || {}}
      onSubmit={::this.updateGroup}
      {...this.props}
      />
  }
}


const mapStateToProps = state => ({
  options: {
    groups: state.options.toJS().groups,
    fields: state.options.toJS().fields
  }
})

export default connect(
  mapStateToProps
)(reduxForm({
  form: 'OptionsGroupsEdit'
})(OptionsGroupsEditContainer))
