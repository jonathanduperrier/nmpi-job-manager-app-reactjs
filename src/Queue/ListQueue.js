import React, {Component, useImperativeHandle} from 'react';
import axios from 'axios';

import { 
    BrowserRouter as Router,
    Switch,
    Route, 
    Link } from "react-router-dom";

class ListQueue extends Component {

  constructor(props) {
    super(props)

    this.state = {
      jobs: []
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/jonathanduperrier/nmpi-job-manager-app-reactjs/master/db.json')
    .then(response => {
      console.log(response)
      this.setState({jobs: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }


  render() {
    return (
      <div>
        <h2>List Queue</h2>
        <div className="container-fluid">

        </div>
      </div>
    )
  };
}



export default ListQueue;