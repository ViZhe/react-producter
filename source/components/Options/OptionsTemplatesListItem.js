
import React, {PropTypes} from 'react'


const OptionsTemplatesListItem = ({tmp}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  return <tr>
    <td style={tdStyle} >{tmp.id}</td>
    <td style={tdStyle} >{tmp.name}</td>
    <td style={tdStyle} >{tmp.groups.length}</td>
  </tr>
}


OptionsTemplatesListItem.propTypes = {
  tmp: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default OptionsTemplatesListItem
