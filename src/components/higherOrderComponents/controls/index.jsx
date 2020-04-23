import React, {useState} from 'react';

const defaultValuesForPropTypes = {
  'string': 'string',
  'bool': true,
};

const inputTypeForPropTypes = {
  'string': 'text',
  'bool': 'checkbox',
};

const getInitialFormStateFromControlConfig = (controlConfig) =>
  Object
      .entries(controlConfig)
      .reduce((acc, [propName, propType]) => {
        acc[propName] = {
          propType,
          value: defaultValuesForPropTypes[propType],
          inputType: inputTypeForPropTypes[propType],
        };
        return acc;
      }, {});

export default (controlConfig) => (Component) => (props) => {
  const [state, setState] = useState(
      getInitialFormStateFromControlConfig(controlConfig),
  );
  const handleChange = (e) => {
    const newVal = e.target.type === 'checkbox' ?
      e.target.checked :
      e.target.value;
    const propName = e.target.name;
    setState({
      ...state,
      [propName]: {
        ...state[propName],
        value: newVal,
      },
    });
  };

  const propsFromState = Object.entries(state)
      .reduce((propsFromState, [propName, {value}]) => {
        propsFromState[propName] = value;
        return propsFromState;
      }, {});

  const mergedProps = {
    ...props,
    ...propsFromState,
  };
  return (
    <div>
      <div style={{padding: '1rem'}}>
        <Component {...mergedProps}/>
      </div>
      <div className='control-pane'>
        <form>
          {Object.entries(state)
              .map(([propName, {value, propType}]) => {
                return (
                  <div key={propName}>
                    <label>
                      <span>{propName}:</span>
                      {propType==='bool' ?
                      <input
                        name={propName}
                        type="checkbox"
                        checked={value}
                        onChange={handleChange}
                      /> :
                      <input
                        name={propName}
                        type="inputType"
                        value={value}
                        onChange={handleChange}
                      />
                      }
                    </label>
                  </div>
                );
              })}
        </form>
      </div>
    </div>
  );
};
