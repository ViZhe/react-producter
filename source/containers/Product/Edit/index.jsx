
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {ProductForm} from '~/containers'
import {ProductEdit} from '~/components'
import createValidate from '~/utils/products/validation'
import * as hz from '~/api/horizon/helpers'


class ProductEditContainer extends Component {
  handleUpdateProduct = data => {
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
    const {products, options: {templates, groups, fields}} = this.props
    const product = products.data.find(({id}) => id === this.props.params.id)

    const currentTemplate = templates.find(({name}) => name === product.template)
    const currentGroups = groups.filter(({id}) =>
      currentTemplate.groups.indexOf(id) >= 0
    )
    console.log('currentGroups', currentGroups)

    const validateList = {}
    const initialList = {}
    currentGroups.forEach(group => {
      fields.filter(({id}) => group.fields.indexOf(id) >= 0)
        .forEach(({name, validate}) => {
          if (validate) {
            validateList[name] = validate
          }
          if (product && product.options[name]) {
            initialList[name] = product.options[name]
          }
        })
    })

    let initialValues
    if (Object.keys(initialList).length) {
      initialValues = initialList
    }

    const validate = values => createValidate(validateList, values)

    return (
      <ProductForm
        initialValues={initialValues}
        validate={validate}
        onSubmit={this.handleUpdateProduct}
      >
        <ProductEdit
          isLoading={products.isLoading}
          fields={fields}
          groups={currentGroups}
          textSubmitButton='Обновить товар'
        />
      </ProductForm>
    )
  }
}


const mapStateToProps = state => ({
  products: state.products.toJS(),
  options: state.options.toJS()
})

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('ProductForm'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductEditContainer)
