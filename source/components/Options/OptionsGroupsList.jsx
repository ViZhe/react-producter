
import React, {PropTypes} from 'react'

import {OptionsGroupsListItem} from '~/containers'


const OptionsGroupsList = ({groups}) => {
  let tableStyle = {
    border: '1px solid black'
  }

  const optionsGroups = groups.map((group, index) =>
    <OptionsGroupsListItem
      key={index}
      group={group}
    />
  )
  const optionsGroupsEmpty = <tr><td colSpan='6' >Полей нет</td></tr>

  return (
    <div>
      <h2>Options Groups List</h2>
      <table style={tableStyle} >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>title</th>
            <th>total fields</th>
            <th>edit</th>
            <th>destroy</th>
          </tr>
        </thead>
        <tbody>
          {optionsGroups || optionsGroupsEmpty}
        </tbody>
      </table>
    </div>
  )
}


OptionsGroupsList.propTypes = {
  groups: PropTypes.array
}

export default OptionsGroupsList
