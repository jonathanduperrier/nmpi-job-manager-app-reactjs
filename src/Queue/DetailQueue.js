import React, {Component, useImperativeHandle} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function DetailQueue() {
  let { id } = useParams(); //impossible with class component

  return(
    <div>
      <h2>Detail Queue {id}</h2>
    </div>
  );
}

export default DetailQueue;