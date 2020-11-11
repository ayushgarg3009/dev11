import React from 'react';
import logo from "../../static/images/resume.png";
import { NavLink } from "react-router-dom";


// import React from "react";

// import {NavLink} from "react-router-dom";
import {fieldCd, skinCodes}  from '../../constants/typeCodes';

import ResumePreview from './resumePreview'
import { connect } from "react-redux";

// import * as contactActions from '../../actions/contactActions';
import { bindActionCreators } from 'redux';

  class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context);
            this.state = {
                errorMessage:'',
                email:'',
                password:''
            };      
    }
    
  render() { 
    return (
          <div className="container med contact">
            <h1>Dashboard</h1>
        </div>
    );
  }
}
 

export default Dashboard