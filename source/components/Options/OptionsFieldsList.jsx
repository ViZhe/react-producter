
import React, {PropTypes} from 'react'

import {OptionsFieldsListItem} from '~/containers'


const OptionsFieldsList = ({fields}) => {
  let tableStyle = {
    border: '1px solid black'
  }

  const optionsFields = fields.map((field, index) =>
    <OptionsFieldsListItem
      key={index}
      field={field}
    />
  )
  const optionsFieldsEmpty = <tr><td colSpan={7}>Полей нет</td></tr>

  return (
    <div>
      <h2>Options Fields List</h2>
      <table style={tableStyle} >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>title</th>
            <th>type</th>
            <th>defaultValue</th>
            <th>placeholder</th>
            <th>edit</th>
            <th>destroy</th>
          </tr>
        </thead>
        <tbody>
          {optionsFields || optionsFieldsEmpty}
        </tbody>
      </table>
    </div>
  )
}


OptionsFieldsList.propTypes = {
  fields: PropTypes.array
}

export default OptionsFieldsList
