import React from 'react';
import { Link } from "react-router-dom";

export default class GroundInfo extends React.Component {
    render() {
      return (
        <div className="headerground">
          <div className="headerground__back">
            <Link to="/">
                <div className="headerground__backicon icon-back2"></div>
            </Link>
          </div>
          <title className="headerground__back-title light f_70">Ground Info</title>
      </div>
      );
    }
  }
