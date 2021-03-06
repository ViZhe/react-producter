
import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'

import {
  Options,
  OptionsFieldsAdd, OptionsFieldsEdit,
  OptionsGroupsAdd, OptionsGroupsEdit,
  OptionsTemplatesAdd, OptionsTemplatesEdit,
  Product,
  ProductAdd,
  ProductEdit,
  ProductItem,
  ProductList
} from '~/containers'
import {
  App,
  Home,
  ProductIndex,
  NotFound,
  OptionsIndex,
  OptionsFields,
  OptionsGroups,
  OptionsTemplates
} from '~/components'


const routes = (
  <div>
    <Route path='/' component={App} >
      <IndexRoute component={Home} />

      <Route path='product' component={Product} >
        <IndexRoute component={ProductIndex} />
        <Route path='add' component={ProductAdd} />
        <Route path='list' component={ProductList} />
        <Route path=':id' >
          <IndexRoute component={ProductItem} />
          <Route path='edit' component={ProductEdit} />
        </Route>
      </Route>


      <Route path='options' component={Options} >
        <IndexRoute component={OptionsIndex} />

        <Route path='fields' component={OptionsFields} />
        <Redirect from='field' to='fields' />
        <Route path='field' >
          <Route path='add' component={OptionsFieldsAdd} />
          <Route path=':name' >
            <IndexRoute component={OptionsFieldsEdit} />
          </Route>
        </Route>

        <Route path='groups' component={OptionsGroups} />
        <Redirect from='group' to='groups' />
        <Route path='group' >
          <Route path='add' component={OptionsGroupsAdd} />
          <Route path=':name' >
            <IndexRoute component={OptionsGroupsEdit} />
          </Route>
        </Route>

        <Route path='templates' component={OptionsTemplates} />
        <Redirect from='template' to='templates' />
        <Route path='template' >
          <Route path='add' component={OptionsTemplatesAdd} />
          <Route path=':name' >
            <IndexRoute component={OptionsTemplatesEdit} />
          </Route>
        </Route>
      </Route>
    </Route>
    <Route path='*' component={App} >
      <IndexRoute component={NotFound} />
    </Route>
  </div>
)


export default routes
