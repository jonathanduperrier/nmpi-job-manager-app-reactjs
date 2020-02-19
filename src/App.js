import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams } from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import ListQueue from './Queue/ListQueue.js';
import DetailQUeue from './Queue/DetailQueue.js';
import AddJob from './Queue/AddJob.js';
import ReSubmitJob from './Queue/ReSubmitJob.js';


function App() {
  return (
    <Router>
    <header className="navbar navbar-expand navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#">Job Manager</a>
      <div className="ml-auto order-lg-last">
        <ul className="navbar-nav flex-row">
          <li className="nav-item pr-3 pr-lg-0">
              <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item pr-3 pr-lg-0">
              <a className="nav-link" href="/detailqueue">Detail</a>
          </li>
          <li className="nav-item pr-3 pr-lg-0">
              <a className="nav-link" href="/addjob">Add</a>
          </li>
          <li className="nav-item pr-3 pr-lg-0">
            <a className="nav-link" href="/resubmitjob">Resubmit</a>
          </li>
        </ul>
      </div>
    </header>
    <Switch>
      <Route exact path="/">
          <ListQueue />
      </Route>
      <Route path="/detailqueue/:id">
          <DetailQUeue />
      </Route>
      <Route path="/addjob">
          <AddJob />
      </Route>
      <Route path="/resubmitjob">
          <ReSubmitJob />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
