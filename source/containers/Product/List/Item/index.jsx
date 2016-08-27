
import React, {Component} from 'react'

import {ProductListItem} from '~/components'
import * as hz from '~/api/horizon/helpers'


class ProductListItemContainer extends Component {
  updateProductField(id, field, value) {
    hz.products.update({
      id,
      [field]: value
    }).subscribe(
      res => console.info(`
        Type: Product Field Update
        ID: "${res.id}"
        Field: "${field}"
        Value: "${value}"
      `),
      err => console.error('Update Fail', err)
    )
  }
  handleToggleDelete = () => {
    const product = this.props.product
    this.updateProductField(product.id, 'isDeleted', !product.isDeleted)
  }
  handleToggleActive = () => {
    const product = this.props.product
    this.updateProductField(product.id, 'isActivated', !product.isActivated)
  }
  handleDestroy = () => {
    const id = this.props.product.id
    /* eslint-disable no-alert */
    const isAgree = confirm(`ID: ${id}\nReally want to destroy the product?`)
    /* eslint-enable no-alert */

    if (isAgree) {
      hz.products.remove(this.props.product.id).subscribe(
        res => console.info(`Destroy - Product - Success\nID: "${res.id}"`),
        err => console.error(`Destroy - Product - Fail: ${err}`)
      )
    }
  }
  render() {
    return (
      <ProductListItem
        handleToggleDelete={this.handleToggleDelete}
        handleToggleActive={this.handleToggleActive}
        handleDestroy={this.handleDestroy}
        {...this.props}
      />
    )
  }
}


export default ProductListItemContainer
