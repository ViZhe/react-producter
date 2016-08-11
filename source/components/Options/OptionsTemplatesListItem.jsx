
import React, {PropTypes} from 'react'
import {Link} from 'react-router'


const OptionsTemplatesListItem = ({template, destroyHandler}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  const id = template.id

  return (
    <tr>
      <td style={tdStyle} >{id}</td>
      <td style={tdStyle} >{template.name}</td>
      <td style={tdStyle} >{template.title}</td>
      <td style={tdStyle} >{template.groups ? template.groups.length : 0}</td>
      <td style={tdStyle} ><Link to={`/options/template/${id}`} >edit</Link></td>
      <td style={tdStyle} ><button onClick={destroyHandler} >destroy</button></td>
    </tr>
  )
}


OptionsTemplatesListItem.propTypes = {
  template: PropTypes.object.isRequired
}

export default OptionsTemplatesListItem
