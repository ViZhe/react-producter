
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Products} from '~/components'
import {
  loadOptionsTemplates,
  loadOptionsGroups,
  loadOptionsFields
} from '~/core/options/actions'
import * as hz from '~/api/horizon/helpers'


class ProductsContainer extends Component {
  componentWillMount() {
    hz.optionsTemplates.watch().subscribe(response => {
      this.props.dispatch(loadOptionsTemplates(response))
    })
    hz.optionsGroups.watch().subscribe(response => {
      this.props.dispatch(loadOptionsGroups(response))
    })
    hz.optionsFields.watch().subscribe(response => {
      this.props.dispatch(loadOptionsFields(response))
    })
  }
  render() {
    return (
      <Products
        {...this.props}
      />
    )
  }
}


const mapStateToProps = state => ({
  options: state.options.toJS()
})

export default connect(
  mapStateToProps
)(ProductsContainer)
