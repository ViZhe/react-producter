
import React from 'react'
import {Field} from 'redux-form'

import {FormRenderAuto} from '~/components'


const OptionsFieldsAdd = ({validateList, handleSubmit}) => (
  <div>
    <h2>Options Fields Add</h2>

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
        title='Тип поля'
        type='select'
        name='type'
        placeholder='Тип поля'
      >
        <option value='' >Select a type...</option>
        <option value='text' >text</option>
        <option value='textarea' >textarea</option>
      </Field>
      <Field
        component={FormRenderAuto}
        title='Заголовок поля'
        type='text'
        name='title'
        placeholder='Заголовок поля'
      />
      <Field
        component={FormRenderAuto}
        title='Значение по умолчанию'
        type='text'
        name='defaultValue'
        placeholder='Значение по умолчанию'
      />
      <Field
        component={FormRenderAuto}
        title='Заполнитель'
        type='text'
        name='placeholder'
        placeholder='Заполнитель'
      />
      <div>
        <div><b>Валидаторы</b></div>
        {validateList.map((name, index) =>
          <div key={index} style={{border: '1px solid'}} >
            <div>{index}) <b>{name}</b></div>
            <div>
              <Field
                component={FormRenderAuto}
                title='Активный'
                type='checkbox'
                name={`validate.${name}.isActive`}
              />
              <Field
                component={FormRenderAuto}
                title='Текст ошибки'
                type='text'
                name={`validate.${name}.title`}
                placeholder='Текст ошибки'
              />
              {name === 'regex' &&
                <Field
                  component={FormRenderAuto}
                  title='Регулярное выражение'
                  type='text'
                  name={`validate.${name}.regex`}
                  placeholder='/^[0-9]$/'
                />
              }
            </div>
          </div>
        )}
      </div>
      <div>
        <button type='submit' >Создать поле</button>
      </div>
    </form>
  </div>
)


export default OptionsFieldsAdd
