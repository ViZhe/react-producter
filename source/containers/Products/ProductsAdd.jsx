
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {ProductsForm} from '~/containers'
import {ProductsAdd} from '~/components'
import createValidate from '~/utils/products/validation'
// import * as hz from '~/api/horizon/helpers'


class ProductsAddContainer extends Component {
  componentWillMount() {
    this.setState({currentTemplate: 'defaultTemplate'})
  }
  handleSelectTemplate = event => {
    this.setState({currentTemplate: event.target.value})
  }
  handleAddProduct = data => {
    if (!Object.keys(data).length) {
      console.info('handleAddProduct: No change')
      return
    }
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    console.log(data)
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')

    // hz.products.store({
    //   isActivated: false,
    //   isDeleted: false,
    //   createdAt: Math.floor(Date.now() / 1000), // get timestamp
    //   template: this.state.currentTemplate,
    //   options: data
    // }).subscribe(
    //   res => console.info(`Create - Product - Success\nID: "${res.id}"`),
    //   err => console.error(`Create - Product - Fail: ${err}`),
    //   () => this.props.resetForm()
    // )
  }
  render() {
    const {options: {templates, groups, fields}} = this.props

    const currentTemplate = templates.find(({name}) => name === this.state.currentTemplate)
    const currentGroups = groups.filter(({id}) =>
      currentTemplate.groups.indexOf(id) >= 0
    )

    const validateList = {}
    const initialList = {}
    currentGroups.forEach(group => {
      fields.filter(({id}) => group.fields.indexOf(id) >= 0)
        .forEach(({name, validate, defaultValue}) => {
          if (validate) {
            validateList[name] = validate
          }
          if (defaultValue) {
            initialList[name] = defaultValue
          }
        })
    })

    let initialValues
    if (Object.keys(initialList).length) {
      initialValues = initialList
    }

    const validate = values => createValidate(validateList, values)

    return (
      <ProductsForm
        initialValues={initialValues}
        validate={validate}
        onSubmit={this.handleAddProduct}
      >
        <ProductsAdd
          handleSelectTemplate={this.handleSelectTemplate}
          templates={templates}
          fields={fields}
          groups={currentGroups}
          textSubmitButton='Создать товар'
        />
      </ProductsForm>
    )
  }
}


const mapStateToProps = state => ({
  options: state.options.toJS()
})

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('ProductsForm'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsAddContainer)
