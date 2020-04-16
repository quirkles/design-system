import React from 'react'

const getFullName =
  ({firstName, middleName, lastName}) =>
    [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ')

export default (props) => {
  const {
    title,
    data
  } = props
  const {firstName, middleName, lastName, ...rest} = data

  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <h4>Member Name</h4>
        <h2 className='member-name'>{getFullName({firstName, middleName, lastName})}</h2>
        <table>
          <tbody>
          {Object.entries(rest).map(([keyName, value]) =>

            <tr key={keyName}>
              <td>{keyName}</td>
              <td>{value}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


// "data": {
//   "firstName": "Melene",
//     "middleName": "Betty Anne",
//     "lastName": "Melville",
//     "membershipNo": 614818401,
//     "dateOfBirth": "1975-06-19T04:00:00.000",
//     "enrolmentDate": "2017-10-10T04:00:00.000",
//     "lastVisited": "2020-02-07T19:26:20.691"
// }
