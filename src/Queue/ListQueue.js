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
      error: '',
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/jonathanduperrier/nmpi-job-manager-app-reactjs/master/db.json')
    .then(response => {
      console.log(response)
      this.setState({jobs: response.data.objects})
    })
    .catch(error => {
      console.log(error)
      this.setState({errorMsg: 'Error retreiving data'})
    })
  }


  render() {
    //const { jobs } = this.state
    return (
      <div>
        <h2>List Queue of jobs</h2>
        <div class="row-fluid">
          <div class="col-md-12">
            <table class="table table-striped table-condensed">
              <thead>
                  <tr>
                      <th>
                          <a class="glyphicon glyphicon-plus-sign" href="" ></a>
                          <a class="glyphicon glyphicon-plus-sign" href="" onclick="alert('You have to be within an HBP Collaboratory to submit a new job.')"></a>
                      </th>
                      <th>ID</th>
                      <th>Status</th>
                      <th>System</th>
                      <th>Code</th>
                      <th ng-show="!with_ctx">Collab</th>
                      <th>Submitted on</th>
                      <th>Submitted by</th>
                  </tr>
              </thead>
            </table>
          </div>
          
        {
          this.state.jobs.map(job => <div>{job.collab_id} - {job.hardware_platform}</div>)
        }
        </div>
      </div>
    )
  };
}



export default ListQueue;