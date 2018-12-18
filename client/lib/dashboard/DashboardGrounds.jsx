import React from 'react';
import { Link } from "react-router-dom";
import Grounds from './dgrounds/Grounds';

export default class DashboardGrounds extends React.Component {
    render() {
      return (
        <div>
          <div className="dashboard header__">
            <div className="header__left">
              <div className="bold f_70">
                <span>Quản lí bài viết</span>
              </div>
            </div>
            <div className="header__right">
              <input onChange={this.handleSearch} className="header__search regular f_22" list="matchs" type="search" placeholder=" Search dashboard..." ref="search" />
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="btn-click regular f_32 nav-item active">
                  <Link className="regular nav-link" to="/dashboard">
                  Bài viết<table></table> <span className="sr-only">(current)</span></Link>
                </li>
                <li className="regular f_32 nav-item active">
                  <Link className="regular nav-link" to="/dashboard/matchs">
                  Thành viên <span className="sr-only">(current)</span></Link>
                </li>
              </ul>
            </div>
          </nav>
          <Grounds/>
        </div>
        );
      }
    }
  
  