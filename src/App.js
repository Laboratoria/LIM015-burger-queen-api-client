
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
  // NavLink
} from "react-router-dom";
import './css/Login.css';
import './css/Waiter.css'
import Login from './components/Login';
import Chef from './components/Chef';
import Orders from './components/Orders';
import Admi from './components/Admi';
import Waiter from './components/Waiter';



function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/waiter">
          <Waiter />
        </Route>

        <Route path="/orders">
          <Orders />
        </Route>

        <Route path="/chef">
          <Chef />
        </Route>

        <Route path="/admi">
          <Admi />
        </Route>

      </Switch>
    </Router >


  );
}

export default App;