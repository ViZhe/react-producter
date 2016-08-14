
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {OptionsForm} from '~/containers'
import {OptionsGroupsEdit} from '~/components'
import * as hz from '~/api/horizon/helpers'


class OptionsGroupsEditContainer extends Component {
  handleUpdateGroup = data => {
    if (!Object.keys(data).length) {
      console.info('handleUpdateGroup: No change')
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
    const initials = this.props.options.groups.find(({id}) =>
      id === this.props.params.id
    )

    return (
      <OptionsForm initialValues={initials} onSubmit={this.handleUpdateGroup} >
        <OptionsGroupsEdit fields={this.props.options.fields} />
      </OptionsForm>
    )
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
)(OptionsGroupsEditContainer)
