import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import {
  CardDemo,
  ButtonDemo,
} from './components/presentationComponents';


const Index = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/card">Card</Link>
        </li>
        <li>
          <Link to="/button">Button</Link>
        </li>
      </ul>
    </nav>
  </div>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/card">
          <CardDemo/>
        </Route>
        <Route path="/button">
          <ButtonDemo/>
        </Route>
        <Route path="/">
          <Index/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
