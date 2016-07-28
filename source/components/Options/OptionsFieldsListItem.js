
import React, {PropTypes} from 'react'


const OptionsFieldsListItem = ({field, destroyHandler}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  return <tr>
    <td style={tdStyle} >{field.id}</td>
    <td style={tdStyle} >{field.name}</td>
    <td style={tdStyle} >{field.title}</td>
    <td style={tdStyle} >{field.type}</td>
    <td style={tdStyle} >{field.default}</td>
    <td style={tdStyle} ><button onClick={destroyHandler} >destroy</button></td>
  </tr>
}


OptionsFieldsListItem.propTypes = {
  field: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default OptionsFieldsListItem
