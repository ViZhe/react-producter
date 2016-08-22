
import React from 'react'

import {FormField} from '~/components'
import createNormalize from '~/utils/normalize'


const OptionsGroupsAdd = ({fields, handleSubmit}) => (
  <div>
    <h2>Options Groups Add</h2>

    <form onSubmit={handleSubmit} >
      <FormField
        title='Название'
        type='text'
        name='name'
        placeholder='Название'
        normalize={createNormalize([
          {name: 'translit', replaceSpace: ''},
          {name: 'lower'},
          {name: 'maxLength', num: 20}
        ])}
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
        <button type='submit' >Создать группу</button>
      </div>
    </form>
  </div>
)


export default OptionsGroupsAdd
