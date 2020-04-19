import React, {Fragment, memo} from 'react'

import { LARGE } from './higherOrderComponents/responsify/breakpoints'

const readablePropNameMap ={
  membershipNo: 'Membership Number',
  dateOfBirth: 'Date of Birth',
  enrolmentDate: 'Enrolment Date',
  lastVisited: 'You Last Visited',
}

const getTableRow = (screenSize, keyValuePair) => {
  const [keyName, value] = keyValuePair;
  switch (screenSize) {
    case LARGE:
      return (
        <tr key={keyName}>
          <td>{readablePropNameMap[keyName]}</td>
          <td>{value}</td>
        </tr>
      )
      break;
    default:
      return (
        <Fragment key={keyName}>
          <tr>
            <td>{readablePropNameMap[keyName]}</td>
          </tr>
          <tr>
            <td>{value}</td>
          </tr>
        </Fragment>
      )
  }
}

const getFullName =
  ({firstName, middleName, lastName}) =>
    [firstName, middleName, lastName]
      .filter(Boolean)
      .join(' ')

export default memo((props) => {
  const {
    title,
    data = {},
    screenSize
  } = props
  const {firstName, middleName, lastName, ...rest} = data
  console.log('screenSize in Card:', screenSize)
  return (
    <div className="card app-red">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <h4>Member Name</h4>
        <h2 className='member-name'>{getFullName({firstName, middleName, lastName})}</h2>
        <table>
          <tbody>
            {Object.entries(rest).map((keyValuePair) => getTableRow(screenSize, keyValuePair))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
