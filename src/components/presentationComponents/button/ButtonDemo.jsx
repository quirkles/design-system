import React from 'react';
import {Link} from 'react-router-dom';

import controls from '../../higherOrderComponents/controls';

import Button from './Button';

const EnhancedButton = controls()(Button);

const ButtonDemo = () => (
  <div>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
    <EnhancedButton/>
  </div>);

export default ButtonDemo;
