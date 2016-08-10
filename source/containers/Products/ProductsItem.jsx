
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {ProductsItem} from '~/components'
import {loadProducts} from '~/core/products/actions'
import * as hz from '~/utils/horizon/helpers'


class ProductsItemContainer extends Component {
  componentDidMount() {
    hz.products.watch().subscribe(response => {
      this.props.dispatch(loadProducts(response))
    })
  }
  render() {
    const product = this.props.products.data.find(({id}) =>
      id === this.props.params.id
    )

    return (
      <ProductsItem
        product={product || {}}
      />
    )
  }
}


const mapStateToProps = state => ({
  products: state.products.toJS()
})

export default connect(
  mapStateToProps
)(ProductsItemContainer)
