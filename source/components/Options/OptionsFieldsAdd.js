
import React, {Component} from 'react'
// import React, {Component, PropTypes} from 'react'
import {reset} from 'redux-form'

import {DynamicForm} from '~/components'

import * as hz from '~/utils/horizon/helpers'


export default class OptionsFieldsAdd extends Component {
  addField(fieldData) {
    const {dispatch} = this.props

    hz.optionsFields.store(fieldData).subscribe(
      _id => {
        dispatch(reset('dynamicForm'))
        console.info(`
        Type: Field Created
        Id: "${_id.id}".`)
      },
      err => console.error('Created Fail', err)
    )
  }
  render() {
    const data = {
      groupsList: [
        {
          id: 'group1',
          name: 'mainGroup',
          title: 'Основная группа',
          fields: [
            'field1',
            'field2',
            'field3',
            'field4'
          ]
        }
      ],
      fieldsList: [
        {
          id: 'field1',
          name: 'name',
          type: 'text',
          title: 'Название поля'
        },
        {
          id: 'field2',
          name: 'title',
          type: 'text',
          title: 'Заголовок поля'
        },
        {
          id: 'field3',
          name: 'type',
          type: 'text',
          title: 'Тип поля'
        },
        {
          id: 'field4',
          name: 'default',
          type: 'text',
          title: 'Значение по умолчанию'
        }
      ],
      fields: [
        'name', 'title', 'type', 'default'
      ],
      initialValues: {
        name: 'Default Text'
      }
    }

    return <div >
      <h2>Options Fields Add</h2>
      <DynamicForm
        groupsList={data.groupsList}
        fieldsList={data.fieldsList}
        fields={data.fields}
        initialValues={data.initialValues}
        onSubmit={::this.addField}
        submitButtonText='Создать поле'
        />
    </div>
  }
}
