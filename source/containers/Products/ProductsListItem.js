
import React, {Component} from 'react'

import {ProductsListItem} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class ProductsListItemContainer extends Component {
  updateProductField(id, field, value) {
    hz.products.update({
      id,
      [field]: value
    }).subscribe(
      res => console.info(`Type: Product Field Update\nID: "${res.id}"\nField: "${field}"\nValue: "${value}"`),
      err => console.error('Update Fail', err)
    )
  }
  toggleDeleteProduct = () => {
    const product = this.props.product
    this.updateProductField(product.id, 'isDeleted', !product.isDeleted)
  }
  toggleActiveProduct = () => {
    const product = this.props.product
    this.updateProductField(product.id, 'isActivated', !product.isActivated)
  }
  destroyProduct = () => {
    hz.products.remove(this.props.product.id).subscribe(
      res => console.info(`Type: Product Destroy\nID: "${res.id}"`),
      err => console.error('Destroy Fail', err)
    )
  }
  render() {
    return <ProductsListItem
      toggleDeleteHandler={this.toggleDeleteProduct}
      toggleActiveHandler={this.toggleActiveProduct}
      destroyHandler={this.destroyProduct}
      {...this.props}
      />
  }
}


export default ProductsListItemContainer
