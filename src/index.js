import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'

import './styles/app.scss'

const props = {
  title: "Personal Information",
  "data": {
    "firstName": "Melene",
    "middleName": "Betty Anne",
    "lastName": "Melville",
    "membershipNo": 614818401,
    "dateOfBirth": "1975-06-19T04:00:00.000",
    "enrolmentDate": "2017-10-10T04:00:00.000",
    "lastVisited": "2020-02-07T19:26:20.691"
  }
}


const renderApp = (activeBreakPoint = 'small') => ReactDOM.render(
 <App {...props} screenSize={activeBreakPoint}/>,
 document.getElementById('root')
);

renderApp()