
import React from 'react'
import {Field} from 'redux-form'

import {FormRenderAuto} from '~/components'


const OptionsTemplatesAdd = ({groups, handleSubmit}) => (
  <div>
    <h2>Options Templates Add</h2>

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
        title='Заголовок шаблона'
        type='text'
        name='title'
        placeholder='Заголовок шаблона'
      />
      <Field
        component={FormRenderAuto}
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
      </Field>
      <div>
        <button type='submit' >Создать шаблон</button>
      </div>
    </form>
  </div>
)


export default OptionsTemplatesAdd
