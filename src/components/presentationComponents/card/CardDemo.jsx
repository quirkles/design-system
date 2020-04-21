import React from 'react';
import {Link} from 'react-router-dom';

import Card from './Card';

const CardDemo = () => (
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
    <Card/>
  </div>);

export default CardDemo;
