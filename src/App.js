
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './css/App.css';
import Login from './components/Login';
import Chef from './components/Chef';
import Orders from './components/Orders';
import Admi from './components/Admi';
import Waiter from './components/Waiter';



function App() {
  return (
    <Router>
      <div className="App">

        <div>
          <Link to="/">
            Inicio
          </Link>
          <NavLink to="/chef" activeClassName="active">
            Chef
          </NavLink>
        </div>


        <Switch>
          <Route path="/" exact>
            <Login />
            {/* <Nosotros /> */}
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
      </div>
    </Router >


  );
}

export default App;