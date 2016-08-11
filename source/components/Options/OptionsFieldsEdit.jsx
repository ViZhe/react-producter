
import React from 'react'
import {Field} from 'redux-form'


const OptionsFieldsEdit = ({handleSubmit}) => (
  <div>
    <h2>Options Fields Edit</h2>

    <form onSubmit={handleSubmit} >
      <div>
        <label>Название</label>
        <div>
          <Field component='input' type='text' name='name' placeholder='Название' />
        </div>
      </div>
      <div>
        <label>Тип поля</label>
        <div>
          <Field component='input' type='text' name='type' placeholder='Тип поля' />
        </div>
      </div>
      <div>
        <label>Заголовок поля</label>
        <div>
          <Field component='input' type='text' name='title' placeholder='Заголовок поля' />
        </div>
      </div>
      <div>
        <label>Значение по умолчанию</label>
        <div>
          <Field
            component='input'
            type='text'
            name='defaultValue'
            placeholder='Значение по умолчанию'
          />
        </div>
      </div>
      <div>
        <label>Заполнитель</label>
        <div>
          <Field component='input' type='text' name='placeholder' placeholder='Заполнитель' />
        </div>
      </div>
      <div>
        <button type='submit' >Обновить поле</button>
      </div>
    </form>
  </div>
)


export default OptionsFieldsEdit
