
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {
  loadOptionsTemplates
} from '~/core/options/actions'
import {DynamicFormCreator} from '~/components'
import * as hz from '~/utils/horizon/helpers'

/*eslint-disable*/
class AddProduct extends Component {
  componentWillMount() {
    this.setState({currentTemplate: 'defaultTemplate'})
    hz.optionsTemplates.watch().subscribe(response => {
      this.props.dispatch(loadOptionsTemplates(response))
    })

  }
  handleSelectTemplate = event => {
    this.setState({currentTemplate: event.target.value})
  }
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
    const {options: {templates}} = this.props
    return <div className='c-area-list'>
      <h2>Add Product</h2>

      <p>Select template:</p>
      <select onChange={this.handleSelectTemplate}>
        {templates.map(({name, title}) =>
          <option value={name}>{title}</option>
        )}
      </select>

      <p>Create product:</p>
      <DynamicFormCreator
        template={this.state.currentTemplate}
        onSubmit={this.handleAddProduct}
        submitButtonText='Создать товар'
        />
    </div>
  }
}


const mapStateToProps = state => ({
  options: {
    templates: state.options.toJS().templates
  }
})

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('dynamicForm'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct)
