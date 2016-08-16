
import React, {PropTypes} from 'react'
import {Link} from 'react-router'


const OptionsFieldsListItem = ({field, handleDestroy}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  const name = field.name

  return (
    <tr>
      <td style={tdStyle} >{field.id}</td>
      <td style={tdStyle} >{name}</td>
      <td style={tdStyle} >{field.title}</td>
      <td style={tdStyle} >{field.type}</td>
      <td style={tdStyle} >{field.defaultValue}</td>
      <td style={tdStyle} >{field.placeholder}</td>
      <td style={tdStyle} ><Link to={`/options/field/${name}`} >edit</Link></td>
      <td style={tdStyle} ><button onClick={handleDestroy} >destroy</button></td>
    </tr>
  )
}


OptionsFieldsListItem.propTypes = {
  field: PropTypes.object.isRequired
}

export default OptionsFieldsListItem
