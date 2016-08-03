
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {DynamicFormCreator} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class AddProduct extends Component {
  handleAddProduct = data => {
    if (!Object.keys(data).length) {
      console.info('handleAddProduct: Поля не изменились.')
      return
    }

    hz.products.store({
      isActivated: false,
      isDeleted: false,
      createdAt: Math.floor(Date.now() / 1000), // get timestamp
      options: data
    }).subscribe(
      res => console.info(`Create - Product - Success\nID: "${res.id}"`),
      err => console.error(`Create - Product - Fail: ${err}`),
      () => this.props.resetForm()
    )
  }
  render() {
    const templ = 'defaultTemplate'

    return <div className='c-area-list'>
      <h2>Add Product</h2>
      <DynamicFormCreator
        template={templ}
        onSubmit={this.handleAddProduct}
        submitButtonText='Создать товар'
        />
    </div>
  }
}


const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('dynamicForm'))
})

export default connect(
  null,
  mapDispatchToProps
)(AddProduct)
