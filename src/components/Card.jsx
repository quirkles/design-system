import React, {Fragment, memo} from 'react'
import {format} from 'date-fns'

import { flip, pipe, curry } from '../fns'
import { LARGE } from './higherOrderComponents/responsify/breakpoints'

const readablePropNameMap ={
  membershipNo: 'Membership Number',
  dateOfBirth: 'Date of Birth',
  enrolmentDate: 'Enrolment Date',
  lastVisited: 'You Last Visited',
}

const toDate = str => new Date(str)
const curriedFlippedFormat = curry(flip(format))

const propNameFormatterMap ={
  dateOfBirth: pipe(toDate, curriedFlippedFormat('MMM dd, yyy')),
  enrolmentDate: pipe(toDate, curriedFlippedFormat('MMM dd, yyy')),
  lastVisited: pipe(toDate, curriedFlippedFormat('MMM dd, yyy p')),
}

const identity = x => x



const formatKeyValuePair = ([initialKeyName, initialValue]) => ([
  readablePropNameMap[initialKeyName],
  (propNameFormatterMap[initialKeyName] || identity)(initialValue)
])

const getTableRow = (screenSize, keyValuePair) => {
  const [keyName, value] = formatKeyValuePair(keyValuePair);
  switch (screenSize) {
    case LARGE:
      return (
        <tr key={keyName.replace(' ', '')}>
          <td>{keyName}</td>
          <td>{value}</td>
        </tr>
      )
      break;
    default:
      return (
        <Fragment key={keyName}>
          <tr>
            <td>{keyName}</td>
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
    selectedColor,
    title,
    data = {},
    screenSize
  } = props
  const {firstName, middleName, lastName, ...rest} = data
  return (
    <div className={`card ${selectedColor}`}>
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
