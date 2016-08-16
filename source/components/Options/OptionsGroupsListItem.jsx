
import React, {PropTypes} from 'react'
import {Link} from 'react-router'


const OptionsGroupsListItem = ({group, handleDestroy}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  const name = group.name

  return (
    <tr>
      <td style={tdStyle} >{group.id}</td>
      <td style={tdStyle} >{name}</td>
      <td style={tdStyle} >{group.title}</td>
      <td style={tdStyle} >{group.fields ? group.fields.length : 0}</td>
      <td style={tdStyle} ><Link to={`/options/group/${name}`} >edit</Link></td>
      <td style={tdStyle} ><button onClick={handleDestroy} >destroy</button></td>
    </tr>
  )
}


OptionsGroupsListItem.propTypes = {
  group: PropTypes.object.isRequired
}

export default OptionsGroupsListItem
