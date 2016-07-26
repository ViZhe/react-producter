
import React, {PropTypes} from 'react'

import OptionsTemplatesListItem from './OptionsTemplatesListItem'


const OptionsTemplatesList = ({options}) => {
  let tableStyle = {
    border: '1px solid black'
  }

  const optionsTemplates = options.templates || []
  const templatesWrap = optionsTemplates.length
    ? optionsTemplates.map((tmp, index) =>
      <OptionsTemplatesListItem
        key={index}
        tmp={tmp}
        />
    )
    : <tr><td>Шаблонов нет</td></tr>

  return <div>
    <h2>Options Templates List</h2>
    <table style={tableStyle} >
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>total groups</th>
        </tr>
      </thead>
      <tbody>
        {templatesWrap}
      </tbody>
    </table>
  </div>
}


OptionsTemplatesList.propTypes = {
  options: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default OptionsTemplatesList
