import React, {useState} from 'react';
import propTypes from 'prop-types';


const {
  string: stringPropType,
  bool: boolPropType,
} = propTypes;

const getDefaultValueForPropType = (propType) => {
  switch (propType) {
    case stringPropType:
      return '';
    case boolPropType:
      return true;
  }
};

const getInputTypeForPropType = (propType) => {
  switch (propType) {
    case stringPropType:
      return 'text';
    case boolPropType:
      return 'checkbox';
  }
};

const getInitialFormStateFromPropTypes = (propTypes) => {
  if (!propTypes) {
    throw new Error('Components wrapped in a control HoC must have it\'s propTypes defined.');
  }
  return Object
      .entries(propTypes)
      .reduce((acc, [propName, propType]) => {
        acc[propName] = {
          value: getDefaultValueForPropType(propType),
          inputType: getInputTypeForPropType(propType),
        };
        return acc;
      }, {});
};

const getPropsFromState = (state) => Object.entries(state)
    .reduce((propsFromState, [propName, {value}]) => {
      propsFromState[propName] = value;
      return propsFromState;
    }, {});

export default () => (Component) => (props) => {
  const [state, setState] = useState(
      getInitialFormStateFromPropTypes(Component.propTypes),
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


  const mergedProps = {
    ...props,
    ...getPropsFromState(state),
  };
  return (
    <div>
      <div style={{padding: '1rem'}}>
        <Component {...mergedProps}/>
      </div>
      <div className='control-pane'>
        <form>
          {Object.entries(state)
              .map(([propName, {value, inputType}]) => {
                return (
                  <div key={propName}>
                    <label>
                      <span>{propName}:</span>
                      {inputType ==='checkbox' ?
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
