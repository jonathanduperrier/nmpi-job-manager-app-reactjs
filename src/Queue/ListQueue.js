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
      jobs: [],
      error
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
      this.setState({errorMsg: 'Error retreiving data'})
    })
  }


  render() {
    const { jobs } = this.state
    return (
      <div>
        <h2>List Queue of jobs</h2>
        {
          jobs.length ?
          jobs.map(post => <div key={post.collab_id}>{post.id}</div>)
          //null
        }
        
      </div>
    )
  };
}



export default ListQueue;