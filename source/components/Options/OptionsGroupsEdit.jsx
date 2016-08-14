
import React from 'react'
import {Field} from 'redux-form'


const renderField = ({meta: {touched, error}, input, ...rest}) => (
  <div>
    <input {...rest} {...input} />
    {touched && error && <span>{error}</span>}
  </div>
)

const OptionsGroupsEdit = ({fields, handleSubmit}) => (
  <div>
    <h2>Options Groups Edit</h2>

    <form onSubmit={handleSubmit} >
      <div>
        <label>Название</label>
        <div>
          <Field
            component={renderField}
            type='text'
            name='name'
            placeholder='Название'
          />
        </div>
      </div>
      <div>
        <label>Заголовок группы</label>
        <div>
          <Field
            component={renderField}
            type='text'
            name='title'
            placeholder='Заголовок группы'
          />
        </div>
      </div>
      <div>
        <label>Поля</label>
        <div>
          <Field component='select' name='fields' defaultValue={[]} multiple >
            {fields.map((field, index) =>
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
)


export default OptionsGroupsEdit
