
import React, {Component} from 'react'
import {Link} from 'react-router'


export default class App extends Component {
  render() {
    return <div>
      <h1>APP</h1>
      <ul>
        <li><Link to='/' activeClassName='active' onlyActiveOnIndex >Main</Link></li>
        <li><Link to='/options' activeClassName='active' >Options</Link>
          <ul>
            <li><Link to='/options/fields' activeClassName='active' >Options Fields</Link>
              <ul>
                <li><Link to='/options/field/add' activeClassName='active' >Options Field Add</Link></li>
              </ul>
            </li>
            <li><Link to='/options/groups' activeClassName='active' >Options Groups</Link>
              <ul>
                <li><Link to='/options/group/add' activeClassName='active' >Options Group Add</Link></li>
              </ul>
            </li>
            <li><Link to='/options/templates' activeClassName='active' >Options Templates</Link>
              <ul>
                <li><Link to='/options/template/add' activeClassName='active' >Options Template Add</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><Link to='/products' activeClassName='active' >Products</Link>
          <ul>
            <li><Link to='/product/add' activeClassName='active' >Products Add</Link></li>
          </ul>
        </li>
      </ul>
      {this.props.children}
    </div>
  }
}
