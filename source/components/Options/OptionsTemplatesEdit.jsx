
import React from 'react'
import {Field} from 'redux-form'


const OptionsTemplatesEdit = ({template, options, onSubmit, handleSubmit}) => (
  <div>
    <h2>Options Templates Edit</h2>

    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>Название</label>
        <div>
          <Field
            component='input'
            type='text'
            name='name'
            defaultValue={template.name}
            placeholder='Название'
          />
        </div>
      </div>
      <div>
        <label>Заголовок шаблона</label>
        <div>
          <Field
            component='input'
            type='text'
            name='title'
            defaultValue={template.title}
            placeholder='Заголовок шаблона'
          />
        </div>
      </div>
      <div>
        <label>Группы</label>
        <div>
          <Field component='select' multiple name='groups' defaultValue={template.groups || []} >
            {options.groups.map((group, index) =>
              <option key={index} value={group.id}>{group.title}</option>
            )}
          </Field>
        </div>
      </div>
      <div>
        <button type='submit' >Обновить шаблон</button>
      </div>
    </form>
  </div>
)


export default OptionsTemplatesEdit
