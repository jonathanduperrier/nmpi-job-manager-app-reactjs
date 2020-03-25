import React, {Component, useImperativeHandle, useState, useEffect} from 'react';
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
<<<<<<< HEAD
  const[jobs, setJobs] = useState({objects : []});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://raw.githubusercontent.com/jonathanduperrier/nmpi-job-manager-app-reactjs/master/db_' + id + '.json',
      );
      setJobs(result.data);
    };
    fetchData();
  }, []);
=======

  axios.get('https://raw.githubusercontent.com/jonathanduperrier/nmpi-job-manager-app-reactjs/master/db_' + id + '.json')
  .then(response => {
    console.log(response.data.objects[0]);
    
    //this.setState({job: response.data.objects[0]});
    // var mydate = new Date(response.data.objects.date);
    // var date = mydate.toString("jj/MM/yyyy");
    // console.log("date : " + date);
    // this.setState({date: date});
  });
>>>>>>> 0c153733cdfda17140d8f36627b5c002f68dfdb5

  return(
    <div>
      <h2>Job {id}</h2>
<<<<<<< HEAD
        {jobs.objects.map(job => (
          <div>
            <p>
              <span className={job.status == 'finished' ? 'badge badge-success' : 'badge badge-danger'}>{job.status}</span>
            </p>
            <p>
              <small class="ng-binding">Submitted {job.timestamp_submission}
                    by DUPERRIER Jonathan
                    to <strong class="ng-binding">{job.hardware_platform}</strong>
              </small>
            </p>
            <div class="row-fluid">
              <div class="panel panel-default">
                <div class="panel-heading">Code</div>
                <div class="panel-body ng-pristine ng-untouched ng-binding ng-scope ng-valid ng-valid-required">
                  {job.code}
                </div>
              </div>
            </div>
          </div>
      ))}
=======

>>>>>>> 0c153733cdfda17140d8f36627b5c002f68dfdb5
    </div>
  );
}

export default DetailQueue;