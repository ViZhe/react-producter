
import React, {PropTypes} from 'react'
import {Link} from 'react-router'


const ProductsListItem = ({product, handleToggleDelete, handleToggleActive, handleDestroy}) => {
  let tdStyle = {
    border: '1px solid gray'
  }

  const id = product.id

  return (
    <tr>
      <td style={tdStyle} >{id}</td>
      <td style={tdStyle} >{product.options && product.options.name}</td>
      <td style={tdStyle} >{product.template}</td>
      <td style={tdStyle} ><Link to={`/products/${id}/edit`} >edit</Link></td>
      <td style={tdStyle} >
        <button onClick={handleToggleDelete} >
          {product.isDeleted ? 'restore' : 'detele'}
        </button>
      </td>
      <td style={tdStyle} >
        <button onClick={handleToggleActive} >
          {product.isActivated ? 'deactivate' : 'activate'}
        </button>
      </td>
      <td style={tdStyle} ><button onClick={handleDestroy} >destroy</button></td>
    </tr>
  )
}


ProductsListItem.propTypes = {
  product: PropTypes.object.isRequired,
  handleToggleDelete: PropTypes.func.isRequired,
  handleToggleActive: PropTypes.func.isRequired,
  handleDestroy: PropTypes.func.isRequired
}

export default ProductsListItem
