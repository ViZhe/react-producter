
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {OptionsForm} from '~/containers'
import {OptionsGroupsAdd} from '~/components'
import createValidate from '~/utils/options/validationGroups'
import * as hz from '~/api/horizon/helpers'


class OptionsGroupsAddContainer extends Component {
  handleAddGroup = data => {
    if (!Object.keys(data).length) {
      console.info('handleAddGroup: No change')
      return
    }

    hz.optionsGroups.store(data).subscribe(
      res => console.info(`Create - Group - Success\nID: "${res.id}"`),
      err => console.error(`Create - Group - Fail: ${err}`),
      () => this.props.resetForm()
    )
  }
  render() {
    const validate = values => createValidate(values)

    return (
      <OptionsForm
        validate={validate}
        onSubmit={this.handleAddGroup}
      >
        <OptionsGroupsAdd fields={this.props.options.fields} />
      </OptionsForm>
    )
  }
}


const mapStateToProps = state => ({
  options: {
    fields: state.options.toJS().fields
  }
})

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('OptionsForm'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsGroupsAddContainer)
