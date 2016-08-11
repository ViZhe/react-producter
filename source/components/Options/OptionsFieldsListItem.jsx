
import React, {PropTypes} from 'react'
import {Link} from 'react-router'


const OptionsFieldsListItem = ({field, destroyHandler}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  const id = field.id

  return (
    <tr>
      <td style={tdStyle} >{id}</td>
      <td style={tdStyle} >{field.name}</td>
      <td style={tdStyle} >{field.title}</td>
      <td style={tdStyle} >{field.type}</td>
      <td style={tdStyle} >{field.defaultValue}</td>
      <td style={tdStyle} >{field.placeholder}</td>
      <td style={tdStyle} ><Link to={`/options/field/${id}`} >edit</Link></td>
      <td style={tdStyle} ><button onClick={destroyHandler} >destroy</button></td>
    </tr>
  )
}


OptionsFieldsListItem.propTypes = {
  field: PropTypes.object.isRequired
}

export default OptionsFieldsListItem
