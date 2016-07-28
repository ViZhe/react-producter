
import React, {PropTypes} from 'react'


const OptionsTemplatesListItem = ({template}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  return <tr>
    <td style={tdStyle} >{template.id}</td>
    <td style={tdStyle} >{template.name}</td>
    <td style={tdStyle} >{template.groups.length}</td>
  </tr>
}


OptionsTemplatesListItem.propTypes = {
  template: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default OptionsTemplatesListItem
