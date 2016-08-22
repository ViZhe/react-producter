
import React from 'react'

import {FormField} from '~/components'
import createNormalize from '~/utils/normalize'


const OptionsTemplatesAdd = ({groups, handleSubmit}) => (
  <div>
    <h2>Options Templates Add</h2>

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
