
import React from 'react'

import {FormField} from '~/components'


const OptionsTemplatesAdd = ({groups, handleSubmit}) => (
  <div>
    <h2>Options Templates Add</h2>

    <form onSubmit={handleSubmit} >
      <FormField
        title='Название'
        type='text'
        name='name'
        placeholder='Название'
      />
      <FormField
        title='Заголовок шаблона'
        type='text'
        name='title'
        placeholder='Заголовок шаблона'
      />
      <FormField
        title='Группы'
        type='select'
        name='groups'
        placeholder='Группы'
        defaultValue={[]}
        multiple
      >
        {groups.map((group, index) =>
          <option key={index} value={group.id}>{group.title}</option>
        )}
      </FormField>
      <div>
        <button type='submit' >Создать шаблон</button>
      </div>
    </form>
  </div>
)


export default OptionsTemplatesAdd
