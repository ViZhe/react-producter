
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import {OptionsForm} from '~/containers'
import {OptionsGroupsEdit} from '~/components'
import createValidate from '~/utils/options/validationGroups'
import * as hz from '~/api/horizon/helpers'


class OptionsGroupsEditContainer extends Component {
  handleUpdateGroup = data => {
    if (!Object.keys(data).length) {
      console.info('handleUpdateGroup: No change')
      return
    }

    hz.optionsGroups.update(data).subscribe(
      res => {
        console.info(`Update - Group - Success\nID: "${res.id}".`)
        browserHistory.replace(
          this.props.location.pathname.replace(/[^\/]+$/, data.name)
        )
      },
      err => console.error(`Update - Group - Fail: ${err}`)
    )
  }
  render() {
    const validate = values => createValidate(values)
    const initials = this.props.options.groups.find(({name}) =>
      name === this.props.params.name
    )

    return (
      <OptionsForm
        initialValues={initials}
        validate={validate}
        onSubmit={this.handleUpdateGroup}
      >
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
