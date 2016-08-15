
import React from 'react'
import {Field} from 'redux-form'

import {FormRenderAuto} from '~/components'


const OptionsGroupsAdd = ({fields, handleSubmit}) => (
  <div>
    <h2>Options Groups Add</h2>

    <form onSubmit={handleSubmit} >
      <Field
        component={FormRenderAuto}
        title='Название'
        type='text'
        name='name'
        placeholder='Название'
      />
      <Field
        component={FormRenderAuto}
        title='Заголовок группы'
        type='text'
        name='title'
        placeholder='Заголовок группы'
      />
      <Field
        component={FormRenderAuto}
        title='Поля'
        type='select'
        name='fields'
        placeholder='Поля'
        defaultValue={[]}
        multiple
      >
        {fields.map((field, index) =>
          <option key={index} value={field.id}>{field.title}</option>
        )}
      </Field>
      <div>
        <button type='submit' >Создать группу</button>
      </div>
    </form>
  </div>
)


export default OptionsGroupsAdd
