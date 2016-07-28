
import React, {PropTypes} from 'react'

import OptionsGroupsListItem from './OptionsGroupsListItem'


const OptionsGroupsList = ({options}) => {
  let tableStyle = {
    border: '1px solid black'
  }

  const optionsGroups = options.groups.map((group, index) =>
    <OptionsGroupsListItem
      key={index}
      group={group}
      />
  )
  const optionsGroupsEmpty = <tr><td colSpan={7}>Полей нет</td></tr>

  return <div>
    <h2>Options Groups List</h2>
    <table style={tableStyle} >
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>title</th>
          <th>total fields</th>
        </tr>
      </thead>
      <tbody>
        {optionsGroups || optionsGroupsEmpty}
      </tbody>
    </table>
  </div>
}


OptionsGroupsList.propTypes = {
  options: PropTypes.object.isRequired // TODO: details it with PropTypes.shape
}

export default OptionsGroupsList
