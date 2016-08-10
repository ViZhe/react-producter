
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {ProductsList} from '~/components'
import {loadProducts} from '~/core/products/actions'
import * as hz from '~/utils/horizon/helpers'


class ProductsListContainer extends Component {
  componentDidMount() {
    hz.products.watch().subscribe(response => {
      this.props.loadProducts(response)
    })
  }
  render() {
    return (
      <ProductsList
        {...this.props}
      />
    )
  }
}


const mapStateToProps = state => ({
  products: state.products.toJS()
})

const mapDispatchToProps = dispatch => ({
  loadProducts: data => dispatch(loadProducts(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListContainer)
