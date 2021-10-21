
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
import Admi from './components/Admi';
import WaiterFirstView from './components/WaiterFirstView';
import PreviewCompletedOrders from './components/PreviewCompletedOrders';
import DeliveredOrdersPreview from './components/DeliveredOrdersPreview';
// import axios from 'axios';


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/waiter">
          <WaiterFirstView />
        </Route>

        <Route path="/completed">
          <PreviewCompletedOrders />
        </Route>

        <Route path="/delivered">
          <DeliveredOrdersPreview />
        </Route>

        <Route path="/admi">
          <Admi />
        </Route>

      </Switch>
    </Router >


  );
}


export default App;