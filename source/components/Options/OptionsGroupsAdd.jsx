
import React from 'react'
import {Field} from 'redux-form'

import {FormRenderInput} from '~/components'


const OptionsGroupsAdd = ({fields, handleSubmit}) => (
  <div>
    <h2>Options Groups Add</h2>

    <form onSubmit={handleSubmit} >
      <Field
        component={FormRenderInput}
        title='Название'
        type='text'
        name='name'
        placeholder='Название'
      />
      <Field
        component={FormRenderInput}
        title='Заголовок группы'
        type='text'
        name='title'
        placeholder='Заголовок группы'
      />
      <div>
        <label>Поля</label>
        <div>
          <Field component='select' name='fields' defaultValue={[]} multiple >
            {fields.map((field, index) =>
              <option key={index} value={field.id}>{field.title}</option>
            )}
          </Field>
        </div>
      </div>
      <div>
        <button type='submit' >Создать группу</button>
      </div>
    </form>
  </div>
)


export default OptionsGroupsAdd
