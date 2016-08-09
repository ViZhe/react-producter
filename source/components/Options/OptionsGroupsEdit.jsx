
import React from 'react'
import {Field} from 'redux-form'


const OptionsGroupsEdit = ({group, options, onSubmit, handleSubmit}) => {
  return <div>
    <h2>Options Groups Edit</h2>

    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>Название</label>
        <div>
          <Field component='input' type='text' name='name' defaultValue={group.name} placeholder='Название' />
        </div>
      </div>
      <div>
        <label>Заголовок группы</label>
        <div>
          <Field component='input' type='text' name='title' defaultValue={group.title} placeholder='Заголовок группы' />
        </div>
      </div>
      <div>
        <label>Поля</label>
        <div>
          <Field component='select' multiple name='fields' defaultValue={group.fields || []} >
            {options.fields.map((field, index) =>
              <option key={index} value={field.id}>{field.title}</option>
            )}
          </Field>
        </div>
      </div>
      <div>
        <button type='submit' >Обновить группу</button>
      </div>
    </form>
  </div>
}


export default OptionsGroupsEdit
