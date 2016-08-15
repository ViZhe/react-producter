
import React from 'react'
import {Field} from 'redux-form'

import {FormRenderInput} from '~/components'


const OptionsFieldsEdit = ({validateList, handleSubmit}) => (
  <div>
    <h2>Options Fields Edit</h2>

    <form onSubmit={handleSubmit} >
      <Field
        component={FormRenderInput}
        title='Название'
        type='text'
        name='name'
        placeholder='Название'
      />
      <div>
        <label>Тип поля</label>
        <div>
          <Field name='type' component='select' >
            <option value='' >Select a type...</option>
            <option value='text' >text</option>
            <option value='textarea' >textarea</option>
          </Field>
        </div>
      </div>
      <Field
        component={FormRenderInput}
        title='Заголовок поля'
        type='text'
        name='title'
        placeholder='Заголовок поля'
      />
      <Field
        component={FormRenderInput}
        title='Значение по умолчанию'
        type='text'
        name='defaultValue'
        placeholder='Значение по умолчанию'
      />
      <Field
        component={FormRenderInput}
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
                component={FormRenderInput}
                title='Активный'
                type='checkbox'
                name={`validate.${name}.isActive`}
              />
              <Field
                component={FormRenderInput}
                title='Текст ошибки'
                type='text'
                name={`validate.${name}.title`}
                placeholder='Текст ошибки'
              />
              {name === 'regex' &&
                <Field
                  component={FormRenderInput}
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
        <button type='submit' >Обновить поле</button>
      </div>
    </form>
  </div>
)


export default OptionsFieldsEdit
