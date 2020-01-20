import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route, 
  Link } from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import ListQueue from './Queue/ListQueue.js';
import DetailQUeue from './Queue/DetailQueue.js';
import AddJob from './Queue/AddJob.js';
import ReSubmitJob from './Queue/ReSubmitJob.js';


function App() {
  return (
    <Router>
    <header class="navbar navbar-expand navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Job Manager</a>
      <div class="ml-auto order-lg-last">
        <ul class="navbar-nav flex-row">
          <li class="nav-item pr-3 pr-lg-0">
              <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item pr-3 pr-lg-0">
              <a class="nav-link" href="/detailqueue">Detail</a>
          </li>
          <li class="nav-item pr-3 pr-lg-0">
              <a class="nav-link" href="/addjob">Add</a>
          </li>
          <li class="nav-item pr-3 pr-lg-0">
            <a class="nav-link" href="/resubmitjob">Resubmit</a>
          </li>
        </ul>
      </div>
    </header>
    <Switch>
      <Route exact path="/">
          <ListQueue />
      </Route>
      <Route path="/detailqueue">
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
