
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {DynamicFormCreator} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class AddProduct extends Component {
  addProduct(data) {
    const {dispatch} = this.props

    const product = {
      isDeleted: false,
      isActivated: false,
      createdAt: Math.floor(Date.now() / 1000), // get timestamp
      options: data
    }

    hz.products.store(product).subscribe(
      _id => {
        dispatch(reset('dynamicForm'))
        console.info(`
        Type: Product Created
        Id: "${_id.id}".`)
      },
      err => console.error('Created Fail', err)
    )
  }
  render() {
    // const {options} = this.props
    const templ = 'defaultTemplate'

    return <div className='c-area-list'>
      <h2>Add Product</h2>
      {/* <p>Групп параметров: {options && options.templates && options.templates.filter(tpl => tpl.name === templ)[0].groups.length}</p> */}
      <DynamicFormCreator
        template={templ}
        onSubmit={::this.addProduct}
        submitButtonText='Создать товар'
        />
    </div>
  }
}

export default connect(state => ({
  options: state.options.toJS()
}))(AddProduct)
