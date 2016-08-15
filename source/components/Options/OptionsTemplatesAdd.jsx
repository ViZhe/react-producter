
import React from 'react'
import {Field} from 'redux-form'

import {FormRenderInput} from '~/components'


const OptionsTemplatesAdd = ({groups, handleSubmit}) => (
  <div>
    <h2>Options Templates Add</h2>

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
        title='Заголовок шаблона'
        type='text'
        name='title'
        placeholder='Заголовок шаблона'
      />
      <div>
        <label>Группы</label>
        <div>
          <Field component='select' multiple name='groups' defaultValue={[]} >
            {groups.map((group, index) =>
              <option key={index} value={group.id}>{group.title}</option>
            )}
          </Field>
        </div>
      </div>
      <div>
        <button type='submit' >Создать шаблон</button>
      </div>
    </form>
  </div>
)


export default OptionsTemplatesAdd
