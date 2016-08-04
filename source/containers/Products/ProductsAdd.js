
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {ProductsAdd} from '~/components'
import {loadOptionsTemplates} from '~/core/options/actions'
import * as hz from '~/utils/horizon/helpers'


class ProductsAddContainer extends Component {
  componentWillMount() {
    this.setState({currentTemplate: 'defaultTemplate'})
    hz.optionsTemplates.watch().subscribe(response => {
      this.props.loadOptionsTemplates(response)
    })
  }
  selectTemplate = event => {
    this.setState({currentTemplate: event.target.value})
  }
  addProduct = data => {
    if (!Object.keys(data).length) {
      console.info('handleAddProduct: Поля не изменились.')
      return
    }

    hz.products.store({
      isActivated: false,
      isDeleted: false,
      createdAt: Math.floor(Date.now() / 1000), // get timestamp
      template: this.state.currentTemplate,
      options: data
    }).subscribe(
      res => console.info(`Create - Product - Success\nID: "${res.id}"`),
      err => console.error(`Create - Product - Fail: ${err}`),
      () => this.props.resetForm()
    )
  }
  render() {
    return <ProductsAdd
      selectTemplateHandler={this.selectTemplate}
      addProductHandler={this.addProduct}
      templates={this.props.options.templates}
      template={this.state.currentTemplate}
      />
  }
}


const mapStateToProps = state => ({
  options: {
    templates: state.options.toJS().templates
  }
})

const mapDispatchToProps = dispatch => ({
  loadOptionsTemplates: data => dispatch(loadOptionsTemplates(data)),
  resetForm: () => dispatch(reset('dynamicForm'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsAddContainer)
