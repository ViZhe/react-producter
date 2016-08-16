
# react-producter

[![Dependency Status](https://david-dm.org/ViZhe/react-producter.svg)](https://david-dm.org/ViZhe/react-producter#info=dependencies)
[![Dev Dependency Status](https://david-dm.org/ViZhe/react-producter/dev-status.svg)](https://david-dm.org/ViZhe/react-producter#info=devDependencies)

## Start
```
npm install
rethinkdb
npm start
```

## TODO
- [ ] update transliteration
  - [ ] add option replaceSpace: '' or '-'
  - [ ] add more chars & symbols in dictionary
- [ ] update OptionsFields
  - [X] add validate
    - [X] add field
    - [X] edit field
  - [ ] add normalize
- [ ] update OptionsGroups
  - [X] add validate
    - [X] add group
    - [X] edit group
  - [ ] add normalize
- [ ] update OptionsTemplates
  - [X] add validate
    - [X] add template
    - [X] edit template
  - [ ] add normalize
- [ ] Remove hz.store && hz.remove && hz.update in reducer
- [ ] Styles
  - [ ] Stylus || PostCSS + SugarSS
  - [ ] autoprefixer
  - [ ] cssnano
  - [ ] linter
- [ ] SSR
- [ ] from horizon to rethinkdb + express api + socketio
- [ ] add React Helmet
- [ ] add propTypes in components
- [ ] tests
- [ ] logs
- [ ] express.js + mongoose
- [ ] Add [Normalizr](https://github.com/paularmstrong/normalizr)
- [ ] ???

## Done
- [X] rewrite ProductsEdit like ProductsAdd
- [X] Add Form/FormRenderInput && Form/FormRenderSelect
- [X] Add render component for Field select
- [X] update DynamicFormCreator for new validate format
- [X] redo DynamicForm from defaultValue to initialValue
- [X] update Options with OptionsForm
  - [X] add Fields
  - [X] edit Fields
  - [X] add Groups
  - [X] edit Groups
  - [X] add Templates
  - [X] edit Templates
- [X] Products
  - [X] add PrdouctsItem
  - [X] update edit
  - [X] add
    - [X] update DynamicForm to redux-form v6
  - [X] list
  - [X] destroy
- [X] Update options
  - [X] load from rethinkdb with horizon
  - [X] templates pages
    - [X] add
    - [X] list
    - [X] edit
    - [X] destroy
  - [X] groups pages
    - [X] add
    - [X] list
    - [X] edit
    - [X] destroy
  - [X] fields pages
    - [X] add
    - [X] list
    - [X] edit
    - [X] destroy
- [X] Routing
- [X] RethinkDB
- [X] Immutable
- [X] Add express server && del webpack-dev-server
- [X] del index.html
- [X] Add webpack config for build server scripts
- [X] deleted & published to isDeleted & isActivated
- [X] createdOn & updatedOn to createdAt & updatedAt
