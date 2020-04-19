import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withRouter } from "react-router";

import {
  CardDemo
} from './components/presentationComponents'


const Index = () => (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/card">Card</Link>
          </li>
        </ul>
      </nav>
    </div>
)

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/card">
          <CardDemo/>
        </Route>
        <Route path="/">
          <Index/>
        </Route>
      </Switch>
    </Router>
  );
}
