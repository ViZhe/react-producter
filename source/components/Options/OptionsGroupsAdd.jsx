
import React from 'react'
import {Field} from 'redux-form'


const OptionsGroupsAdd = ({options, onSubmit, handleSubmit}) => (
  <div>
    <h2>Options Groups Add</h2>

    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>Название</label>
        <div>
          <Field component='input' type='text' name='name' placeholder='Название' />
        </div>
      </div>
      <div>
        <label>Заголовок группы</label>
        <div>
          <Field component='input' type='text' name='title' placeholder='Заголовок группы' />
        </div>
      </div>
      <div>
        <label>Поля</label>
        <div>
          <Field component='select' multiple name='fields' defaultValue={[]} >
            {options.fields.map((field, index) =>
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
