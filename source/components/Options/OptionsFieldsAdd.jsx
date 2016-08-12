
import React from 'react'
import {Field} from 'redux-form'


const renderField = ({meta: {touched, error}, input, ...rest}) => (
  <div>
    <input {...rest} {...input} />
    {touched && error && <span>{error}</span>}
  </div>
)

const OptionsFieldsAdd = ({validateList, handleSubmit}) => (
  <div>
    <h2>Options Fields Add</h2>

    <form onSubmit={handleSubmit} >
      <div>
        <label>Название</label>
        <div>
          <Field component={renderField} type='text' name='name' placeholder='Название' />
        </div>
      </div>
      <div>
        <label>Тип поля</label>
        <div>
          {/* TODO: change to select */}
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
      <div><b>Валидаторы</b></div>
      <div>
      {validateList.map((name, index) =>
        <div key={index}>
          <label>{name}</label>
          <div>
            <Field
              name={`validate.${name}.isActive`}
              type='checkbox'
              component={renderField}
            />
            <Field
              name={`validate.${name}.title`}
              type='text'
              component={renderField}
              placeholder='title'
            />
            {name === 'regex' && <Field
              name={`validate.${name}.regex`}
              type='text'
              component={renderField}
              placeholder='regex'
            />}
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
