
import React from 'react'
import {Field} from 'redux-form'


const OptionsGroupsAdd = ({options, onSubmit, handleSubmit}) => {
  return <div>
    <h2>Options Groups Add</h2>

    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>Название</label>
        <div>
          <Field name='name' component='input' type='text' placeholder='Название' />
        </div>
      </div>
      <div>
        <label>Заголовок группы</label>
        <div>
          <Field name='title' component='input' type='text' placeholder='Заголовок поля' />
        </div>
      </div>
      <div>
        <label>Поля</label>
        <div>
          <Field name='fields' component='select' multiple defaultValue={[]} >
            {options.fields.map((field, index) =>
              <option key={index} value={field.id}>{field.title}</option>
            )}
          </Field>
        </div>
      </div>
      <div>
        <button type='submit' >Создать поле</button>
      </div>
    </form>
  </div>
}


export default OptionsGroupsAdd
