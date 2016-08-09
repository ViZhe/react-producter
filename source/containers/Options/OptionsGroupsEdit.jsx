
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'

import {OptionsGroupsEdit} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsGroupsEditContainer extends Component {
  handleUpdateGroup = data => {
    if (!Object.keys(data).length) {
      console.info('handleUpdateGroup: Поля не изменились.')
      return
    }

    hz.optionsGroups.update({
      ...data,
      id: this.props.params.id
    }).subscribe(
      res => console.info(`Update - Group - Success\nID: "${res.id}".`),
      err => console.error(`Update - Group - Fail: ${err}`)
    )
  }
  render() {
    const group = this.props.options.groups.find(({id}) =>
      id === this.props.params.id
    )

    return <OptionsGroupsEdit
      group={group || {}}
      onSubmit={this.handleUpdateGroup}
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
