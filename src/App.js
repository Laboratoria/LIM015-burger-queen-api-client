
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link,
//   // NavLink
// } from "react-router-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import './css/Login.css';
import './css/Waiter.css'
import Login from './components/Login';
import Admi from './components/Admi/Admi';
import Chef from './components/ChefView/Chef';
import WaiterFirstView from './components/WaiterView/WaiterFirstView';
import PreviewCompletedOrders from './components/PreviewCompletedOrders';
import DeliveredOrdersPreview from './components/DeliveredOrdersPreview';

// import axios from 'axios';


function App() {
  return (
    <Router>

      {/* <Switch>
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

        <Route path="/chef">
          <Chef />

        </Route>

        <Route path="/admin">
          <Admi />
        </Route>


      </Switch> */}


      <Routes>
                  <Route path="/" element={ <Login />}/>
                  <Route path="/waiter" element={<WaiterFirstView />}/>
                  <Route path="/completed" element={<PreviewCompletedOrders />}/>
                  <Route path="/delivered" element={<DeliveredOrdersPreview />}/>
                  <Route path="/chef" element={ <Chef />}/>
                  <Route path="/admin" element={<Admi />}/>
                </Routes>

    </Router >

  );
}


export default App;