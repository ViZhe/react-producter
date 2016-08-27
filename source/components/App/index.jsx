
import React from 'react'
import {Link} from 'react-router'

const App = ({children}) => (
  <div>
    <h1>App</h1>
    <p>New menu:</p>
    <ul>
      <li><Link to='/' activeClassName='active' onlyActiveOnIndex >Home</Link></li>
      <li><Link to='/product' activeClassName='active' >Product</Link>
        <ul>
          <li><Link to='/product/add' activeClassName='active' >Product Add</Link></li>
          <li><Link to='/product/list' activeClassName='active' >Product List</Link></li>
        </ul>
      </li>
    </ul>

    <p>Old menu:</p>
    <ul>
      <li><Link to='/options' activeClassName='active' >Options</Link>
        <ul>
          <li><Link to='/options/fields' activeClassName='active' >Options Fields</Link>
            <ul>
              <li>
                <Link to='/options/field/add' activeClassName='active' >Options Field Add</Link>
              </li>
            </ul>
          </li>
          <li><Link to='/options/groups' activeClassName='active' >Options Groups</Link>
            <ul>
              <li>
                <Link to='/options/group/add' activeClassName='active' >Options Group Add</Link>
              </li>
            </ul>
          </li>
          <li><Link to='/options/templates' activeClassName='active' >Options Templates</Link>
            <ul>
              <li>
                <Link to='/options/template/add' activeClassName='active' >
                  Options Template Add
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li><Link to='/products' activeClassName='active' >Products</Link>
        <ul>
          <li><Link to='/products/add' activeClassName='active' >Products Add</Link></li>
        </ul>
      </li>
    </ul>
    {children}
  </div>
)


export default App
