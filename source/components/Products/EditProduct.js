
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  loadProducts
} from '~/core/products/actions'
import * as hz from '~/utils/horizon/helpers'
import {DynamicFormCreator} from '~/components'


class EditProduct extends Component {
  componentDidMount() {
    hz.products.watch().subscribe(response => {
      this.props.dispatch(loadProducts(response))
    })
  }
  handleUpdateProduct = data => {
    if (!Object.keys(data).length) {
      console.info('handleUpdateProduct: Поля не изменились.')
      return
    }

    hz.products.update({
      id: this.props.params.id,
      updatedAt: Math.floor(Date.now() / 1000), // get timestamp
      options: data
    }).subscribe(
      res => console.info(`Type: Product Update\nID: "${res.id}"`),
      err => console.error('Update Fail', err)
    )
  }
  render() {
    const {products} = this.props

    const product = products.data.filter(product => {
      return product.id === this.props.params.id
    })

    const former = <DynamicFormCreator
      template={product.template || 'defaultTemplate'}
      onSubmit={this.handleUpdateProduct}
      submitButtonText='Обновить товар'
      />

    return <div>
      <h2>Edit Product - {this.props.params.id}</h2>
      {product ? former : 'Данные загружаются'}
    </div>
  }
}


const mapStateToProps = state => ({
  products: state.products.toJS()
})

export default connect(
  mapStateToProps
)(EditProduct)
