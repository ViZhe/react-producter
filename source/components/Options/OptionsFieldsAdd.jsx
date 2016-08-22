
import React from 'react'

import {FormField} from '~/components'
import createNormalize from '~/utils/normalize'


const OptionsFieldsAdd = ({validateList, handleSubmit}) => (
  <div>
    <h2>Options Fields Add</h2>

    <form onSubmit={handleSubmit} >
      <FormField
        title='Название'
        type='text'
        name='name'
        placeholder='Название'
        normalize={createNormalize([
          {name: 'translit', replaceSpace: ''},
          {name: 'lower'},
          {name: 'maxLength', num: 20}
        ])}
      />
      <FormField
        title='Тип поля'
        type='select'
        name='type'
        placeholder='Тип поля'
      >
        <option value='' >Select a type...</option>
        <option value='text' >text</option>
        <option value='textarea' >textarea</option>
      </FormField>
      <FormField
        title='Заголовок поля'
        type='text'
        name='title'
        placeholder='Заголовок поля'
      />
      <FormField
        title='Значение по умолчанию'
        type='text'
        name='defaultValue'
        placeholder='Значение по умолчанию'
      />
      <FormField
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
              <FormField
                title='Активный'
                type='checkbox'
                name={`validate.${name}.isActive`}
              />
              <FormField
                title='Текст ошибки'
                type='text'
                name={`validate.${name}.title`}
                placeholder='Текст ошибки'
              />
              {name === 'regex' &&
                <FormField
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
