
import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'

import {
  App,
  Options,
  OptionsFieldsAdd,
  OptionsFieldsEdit,
  OptionsGroupsAdd,
  OptionsGroupsEdit,
  OptionsTemplatesAdd,
  OptionsTemplatesEdit,
  ProductsAdd,
  ProductsItem
} from '~/containers'
import {
  Home,
  OptionsIndex,
  OptionsFields,
  OptionsGroups,
  OptionsTemplates,
  Products,
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

        <Route path='groups' component={OptionsGroups} />
        <Redirect from='group' to='groups' />
        <Route path='group' >
          <Route path='add' component={OptionsGroupsAdd} />
          <Route path=':id' >
            <IndexRoute component={OptionsGroupsEdit} />
          </Route>
        </Route>

        <Route path='templates' component={OptionsTemplates} />
        <Redirect from='template' to='templates' />
        <Route path='template' >
          <Route path='add' component={OptionsTemplatesAdd} />
          <Route path=':id' >
            <IndexRoute component={OptionsTemplatesEdit} />
          </Route>
        </Route>
      </Route>

      <Route path='products' component={Products} />
      <Redirect from='product' to='products' />
      <Route path='product' >
        <Route path='add' component={ProductsAdd} />
        <Route path=':id' >
          <IndexRoute component={ProductsItem} />
          <Route path='edit' component={EditProduct} />
        </Route>
      </Route>
    </Route>
    <Route path='*' component={Home} /> {/* NotFound */}
  </div>
)