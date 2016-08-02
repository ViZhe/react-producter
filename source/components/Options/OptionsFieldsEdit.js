
import React from 'react'
import {Field} from 'redux-form'


const OptionsFieldsEdit = ({field, onSubmit, handleSubmit}) => {
  return <div>
    <h2>Options Fields Edit</h2>

    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>Название</label>
        <div>
          <Field component='input' type='text' name='name' defaultValue={field.name} placeholder='Название' />
        </div>
      </div>
      <div>
        <label>Тип поля</label>
        <div>
          <Field component='input' type='text' name='type' defaultValue={field.type} placeholder='Тип поля' />
        </div>
      </div>
      <div>
        <label>Заголовок поля</label>
        <div>
          <Field component='input' type='text' name='title' defaultValue={field.title} placeholder='Заголовок поля' />
        </div>
      </div>
      <div>
        <label>Значение по умолчанию</label>
        <div>
          <Field component='input' type='text' name='defaultValue' defaultValue={field.defaultValue} placeholder='Значение по умолчанию' />
        </div>
      </div>
      <div>
        <button type='submit' >Обновить поле</button>
      </div>
    </form>
  </div>
}


export default OptionsFieldsEdit
