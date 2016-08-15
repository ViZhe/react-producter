
import React from 'react'

import {FormField} from '~/components'


const OptionsGroupsEdit = ({fields, handleSubmit}) => (
  <div>
    <h2>Options Groups Edit</h2>

    <form onSubmit={handleSubmit} >
      <FormField
        title='Название'
        type='text'
        name='name'
        placeholder='Название'
      />
      <FormField
        title='Заголовок группы'
        type='text'
        name='title'
        placeholder='Заголовок группы'
      />
      <FormField
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
      </FormField>
      <div>
        <button type='submit' >Обновить группу</button>
      </div>
    </form>
  </div>
)


export default OptionsGroupsEdit
