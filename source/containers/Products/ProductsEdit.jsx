
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {ProductsEdit} from '~/components'
import {loadProducts} from '~/core/options/actions'
import * as hz from '~/utils/horizon/helpers'


class ProductsEditContainer extends Component {
  componentDidMount() {
    hz.products.watch().subscribe(response => {
      this.props.dispatch(loadProducts(response))
    })
  }
  updateProduct = data => {
    if (!Object.keys(data).length) {
      console.info('handleUpdateProduct: No change')
      return
    }

    hz.products.update({
      id: this.props.params.id,
      updatedAt: Math.floor(Date.now() / 1000), // get timestamp
      options: data
    }).subscribe(
      res => console.info(`Update - Product - Success\nID: "${res.id}"`),
      err => console.error(`Update - Product - Fail: ${err}`)
    )
  }
  render() {
    const product = this.props.products.data.find(({id}) => id === this.props.params.id)
    return (
      <ProductsEdit
        product={product}
        updateProductHandler={this.updateProduct}
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
)(ProductsEditContainer)
