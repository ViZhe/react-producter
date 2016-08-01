
import React, {PropTypes} from 'react'


const OptionsGroupsListItem = ({group}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  return <tr>
    <td style={tdStyle} >{group.id}</td>
    <td style={tdStyle} >{group.name}</td>
    <td style={tdStyle} >{group.title}</td>
    <td style={tdStyle} >{group.fields && group.fields.length}</td>
  </tr>
}


OptionsGroupsListItem.propTypes = {
  group: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default OptionsGroupsListItem
