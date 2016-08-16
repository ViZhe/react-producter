
import React, {PropTypes} from 'react'
import {Link} from 'react-router'


const OptionsTemplatesListItem = ({template, handleDestroy}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  const name = template.name

  return (
    <tr>
      <td style={tdStyle} >{template.id}</td>
      <td style={tdStyle} >{name}</td>
      <td style={tdStyle} >{template.title}</td>
      <td style={tdStyle} >{template.groups ? template.groups.length : 0}</td>
      <td style={tdStyle} ><Link to={`/options/template/${name}`} >edit</Link></td>
      <td style={tdStyle} ><button onClick={handleDestroy} >destroy</button></td>
    </tr>
  )
}


OptionsTemplatesListItem.propTypes = {
  template: PropTypes.object.isRequired
}

export default OptionsTemplatesListItem
