
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
import Admi from './components/Admi';
import WaiterNav from './components/WaiterNav';
import PickItems from './components/PickItems';
import BoxSelectItems from './components/BoxSelectItems';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/waiter">
          <WaiterNav />
          <PickItems />
          <BoxSelectItems />

        </Route>

        <Route path="/orders">
          <WaiterNav />
        </Route>

        <Route path="/orderlist">
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