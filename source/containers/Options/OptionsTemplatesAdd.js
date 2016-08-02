
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm, reset} from 'redux-form'

import {OptionsTemplatesAdd} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsTemplatesAddContainer extends Component {
  handleAddTemplate = templateData => {
    hz.optionsTemplates.store(templateData).subscribe(
      res => console.info(`Create - Template - Success\nId: "${res.id}".`),
      err => console.error(`Create - Template - Fail: ${err}`),
      () => this.props.resetForm()
    )
  }
  render() {
    return <OptionsTemplatesAdd
      onSubmit={this.handleAddTemplate}
      {...this.props}
      />
  }
}


const mapStateToProps = state => ({
  options: {
    groups: state.options.toJS().groups
  }
})

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('OptionsTemplatesAdd'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: 'OptionsTemplatesAdd'
})(OptionsTemplatesAddContainer))
