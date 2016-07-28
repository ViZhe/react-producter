
import React from 'react'
import {Field} from 'redux-form'


const OptionsFieldsAdd = ({onSubmit, handleSubmit}) => {
  return <div>
    <h2>Options Fields Add</h2>

    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>Название</label>
        <div>
          <Field name='name' component='input' type='text' placeholder='Название' />
        </div>
      </div>
      <div>
        <label>Тип поля</label>
        <div>
          <Field name='type' component='input' type='text' placeholder='Тип поля' />
        </div>
      </div>
      <div>
        <label>Заголовок поля</label>
        <div>
          <Field name='title' component='input' type='text' placeholder='Заголовок поля' />
        </div>
      </div>
      <div>
        <label>Значение по умолчанию</label>
        <div>
          <Field name='default' component='input' type='text' placeholder='Значение по умолчанию' />
        </div>
      </div>
      <div>
        <button type='submit' >Создать поле</button>
      </div>
    </form>
  </div>
}


export default OptionsFieldsAdd
