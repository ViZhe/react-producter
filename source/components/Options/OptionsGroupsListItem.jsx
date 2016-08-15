
import React, {PropTypes} from 'react'
import {Link} from 'react-router'


const OptionsGroupsListItem = ({group, handleDestroy}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  const id = group.id

  return (
    <tr>
      <td style={tdStyle} >{id}</td>
      <td style={tdStyle} >{group.name}</td>
      <td style={tdStyle} >{group.title}</td>
      <td style={tdStyle} >{group.fields ? group.fields.length : 0}</td>
      <td style={tdStyle} ><Link to={`/options/group/${id}`} >edit</Link></td>
      <td style={tdStyle} ><button onClick={handleDestroy} >destroy</button></td>
    </tr>
  )
}


OptionsGroupsListItem.propTypes = {
  group: PropTypes.object.isRequired
}

export default OptionsGroupsListItem
