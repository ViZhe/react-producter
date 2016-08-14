
import React from 'react'
import {Field} from 'redux-form'


const renderField = ({meta: {touched, error}, input, ...rest}) => (
  <div>
    <input {...rest} {...input} />
    {touched && error && <span>{error}</span>}
  </div>
)

const OptionsTemplatesEdit = ({groups, handleSubmit}) => (
  <div>
    <h2>Options Templates Edit</h2>

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
        <label>Заголовок шаблона</label>
        <div>
          <Field
            component={renderField}
            type='text'
            name='title'
            placeholder='Заголовок шаблона'
          />
        </div>
      </div>
      <div>
        <label>Группы</label>
        <div>
          <Field component='select' name='groups' defaultValue={[]} multiple >
            {groups.map((group, index) =>
              <option key={index} value={group.id}>{group.title}</option>
            )}
          </Field>
        </div>
      </div>
      <div>
        <button type='submit' >Обновить шаблон</button>
      </div>
    </form>
  </div>
)


export default OptionsTemplatesEdit
