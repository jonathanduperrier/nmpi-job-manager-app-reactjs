import React, {Component, useImperativeHandle} from 'react';
import axios from 'axios';


class AddJob extends Component {
    constructor(){
      super();
      this.state = {
        curPage: 0,
        pageSize: 20,
        with_ctx: true,
        tags_list: {},
        status_list: {},
        hardware_list: {},
        hardware_choices: ["BrainScaleS", "SpiNNaker", "BrainScaleS-ESS", "Spikey"],
        status_choices:  ["submitted", "running", "finished", "error"],
      }
    }

    render() {
      return (
        <div>
          <h2>Add Job</h2>
        </div>
      );
    }
}

export default AddJob;