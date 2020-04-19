import React, {useState} from 'react'

const colors = [
  'yellow',
  'purple',
  'blue',
  'pink',
  'green',
  'red',
  'black',
  'beige',
  'white',
];

const initialData = {
  title: "Personal Information",
  data: {
    firstName: "Melene",
    middleName: "Betty Anne",
    lastName: "Melville",
    membershipNo: 614818401,
    dateOfBirth: "1975-06-19T04:00:00.000",
    enrolmentDate: "2017-10-10T04:00:00.000",
    lastVisited: "2020-02-07T19:26:20.691"
  }
}

const initialState = {
  ...initialData,
  selectedColor: 'default',
}

export default () => Component => props => {
  const [state, setState] = useState(initialState)
  const setColor = color => () => setState({
    ...state,
    selectedColor: `app-${color}`,
  })
  return (
    <div>
      <div>
        <Component {...props} {...state}/>
      </div>
      <div className='control-pane'>
        <div className='buttons'>
          {colors.map(color =>
            <button
              key={color}
              onClick={setColor(color)}
              className={`button app-${color} ${`app-${color}` === state.selectedColor ? 'active' : ''}`}
            >{color}</button>
          )}
        </div>
      </div>
    </div>
  );
}
