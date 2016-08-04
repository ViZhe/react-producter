
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm, reset} from 'redux-form'

import {OptionsGroupsAdd} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsGroupsAddContainer extends Component {
  handleAddGroup = data => {
    if (!Object.keys(data).length) {
      console.info('handleAddGroup: Поля не изменились.')
      return
    }

    hz.optionsGroups.store(data).subscribe(
      res => console.info(`Create - Group - Success\nID: "${res.id}".`),
      err => console.error(`Create - Group - Fail: ${err}`),
      () => this.props.resetForm()
    )
  }
  render() {
    return <OptionsGroupsAdd
      onSubmit={this.handleAddGroup}
      {...this.props}
      />
  }
}


const mapStateToProps = state => ({
  options: {
    fields: state.options.toJS().fields
  }
})

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('OptionsGroupsAdd'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: 'OptionsGroupsAdd'
})(OptionsGroupsAddContainer))
