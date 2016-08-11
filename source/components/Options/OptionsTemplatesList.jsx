
import React, {PropTypes} from 'react'

import {OptionsTemplatesListItem} from '~/containers'


const OptionsTemplatesList = ({templates}) => {
  let tableStyle = {
    border: '1px solid black'
  }

  const optionsTemplates = templates.map((template, index) =>
    <OptionsTemplatesListItem
      key={index}
      template={template}
    />
  )
  const optionsTemplatesEmpty = <tr><td colSpan={7}>Шаблонов нет</td></tr>

  return (
    <div>
      <h2>Options Templates List</h2>
      <table style={tableStyle} >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>title</th>
            <th>total groups</th>
            <th>edit</th>
            <th>destroy</th>
          </tr>
        </thead>
        <tbody>
          {optionsTemplates || optionsTemplatesEmpty}
        </tbody>
      </table>
    </div>
)
}


OptionsTemplatesList.propTypes = {
  templates: PropTypes.array
}

export default OptionsTemplatesList
