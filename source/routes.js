
import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'

import {
  App,
  Options,
  OptionsFieldsAdd,
  OptionsFieldsEdit,
  OptionsGroupsList,
  OptionsTemplatesList
} from '~/containers'
import {
  Home,
  OptionsIndex,
  OptionsFields,
  Products,
  AddProduct,
  EditProduct
} from '~/components'


export const routes = (
  <div>
    <Route path='/' component={App} >
      <IndexRoute component={Home} />

      <Route path='options' component={Options} >
        <IndexRoute component={OptionsIndex} />

        <Route path='fields' component={OptionsFields} />
        <Redirect from='field' to='fields' />
        <Route path='field' >
          <Route path='add' component={OptionsFieldsAdd} />
          <Route path=':id' >
            <IndexRoute component={OptionsFieldsEdit} />
          </Route>
        </Route>

        <Route path='groups' component={OptionsGroupsList} />
        <Route path='templates' component={OptionsTemplatesList} />
      </Route>

      <Route path='products' component={Products} />
      <Redirect from='product' to='products' />
      <Route path='product' >
        <Route path='add' component={AddProduct} />
        <Route path=':id' >
          <IndexRoute component={EditProduct} /> {/* TODO: pageProduct */}
          <Route path='edit' component={EditProduct} />
        </Route>
      </Route>
    </Route>
    <Route path='*' component={Home} /> {/* NotFound */}
  </div>
)
