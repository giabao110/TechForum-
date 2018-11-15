import React from 'react';
import { Link } from "react-router-dom";
import Matchs from './dmatchs/Matchs';

export default class Dashboard extends React.Component {
    render() {
      return (
        <div>
          <div className="dashboard header__">
            <div className="header__left">
              <div className="light f_70">
                <span>Dashboard Matchs</span>
              </div>
            </div>
            <div className="header__right">
              <input onChange={this.handleSearch} className="header__search regular f_22" list="matchs" type="search" placeholder=" Search dashboard..." ref="search" />
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="medium f_32 nav-item active">
                  <Link className="nav-link" to="/dashboard">
                  Ground <span className="sr-only">(current)</span></Link>
                </li>
                <li className="btn-click medium f_32 nav-item active">
                  <Link className="nav-link" to="/dashboard/matchs">
                  Matchs <span className="sr-only">(current)</span></Link>
                </li>
              </ul>
            </div>
          </nav>
          <Matchs/>
      </div>
      );
    }
  }