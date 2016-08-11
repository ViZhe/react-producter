
import React from 'react'
import {Field} from 'redux-form'


const OptionsTemplatesAdd = ({groups, handleSubmit}) => (
  <div>
    <h2>Options Templates Add</h2>

    <form onSubmit={handleSubmit} >
      <div>
        <label>Название</label>
        <div>
          <Field component='input' type='text' name='name' placeholder='Название' />
        </div>
      </div>
      <div>
        <label>Заголовок шаблона</label>
        <div>
          <Field component='input' type='text' name='title' placeholder='Заголовок шаблона' />
        </div>
      </div>
      <div>
        <label>Группы</label>
        <div>
          <Field component='select' multiple name='groups' defaultValue={[]} >
            {groups.map((group, index) =>
              <option key={index} value={group.id}>{group.title}</option>
            )}
          </Field>
        </div>
      </div>
      <div>
        <button type='submit' >Создать шаблон</button>
      </div>
    </form>
  </div>
)


export default OptionsTemplatesAdd
