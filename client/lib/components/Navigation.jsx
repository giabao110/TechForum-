import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import { MatchsCol } from '../../../imports/api/matchs';
import { Meteor } from 'meteor/meteor';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = this.getMeteorData(),{
      username: ''
    };
  }

  getMeteorData = () =>{
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount = () =>{
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }
  
  logout = () => {
    Meteor.logout((error) => {
    if (error) {
        console.log(error);
    } else {
        this.props.history.push('/login')
      }
    });  
  }
    render() { 
      let currentUser = this.props.currentUser;
      let userDataAvailable = (currentUser !== undefined);
      let loggedIn = (currentUser && userDataAvailable);
      let dashboard,avt;
      if (loggedIn) {
        if (currentUser.profile.roles == "admin")
        {
          dashboard = <li><Link to="/dashboard">Dashboard</Link></li>;
          avt = <img className="nav__user-img" src={currentUser.profile.avt} alt=""/>;
        }
        if (currentUser.profile.roles == "user") {
          dashboard = <li><Link to="*">Messages</Link></li>; 
          avt = <img className="nav__user-img" src={currentUser.profile.avt} alt=""/>;
        }
      } 
      return(
      <div className="nav boldRoboto">
        <div className="football__wraper">
          <div className="nav__wrap">
            <nav className="nav__items">
              <div>
                <span className="icon-brand"></span>
                <Link to="/" className="nav__logo-brand-name regular f_36" href="/">
                Tech<span className="boldRoboto">Forum</span></Link>
              </div>
              <form className="padding padding-search form-inline ">    
                <input className="nav__search regular f_22" type="search" placeholder="Tìm bài viết, sản phẩm, nhóm, ..." aria-label="Search" />
              </form>
              <ul className="nav__links medium f_22">
                <li>
                  <Link to="/matchs" className="boldRoboto">
                  Forum</Link>
                </li>
                <li>
                  <Link to="/">
                  Camera</Link>
                </li>
                <li>
                  <Link to="*">
                  Car</Link>
                </li>
                <span className="regular f_20 ">{this.props.incompleteCount}</span>
                {dashboard}
                <li>
                  <Link to="/profile">
                  Other</Link>
                </li>
              </ul>
            </nav>
            <div className="nav__right">
              <div className="nav__user">
                {avt}
              </div>
              <div className="dropdown medium f_22 g_5">
                <a className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                { loggedIn ? currentUser.username : '' }
                </a>
                { loggedIn ?  
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item medium f_24 g_5" href="#">Change Password</a>
                  <a onClick={this.logout} className="dropdown-item medium f_24 g_5" href="#">Logout</a>
                </div>
                : '' }
              </div>
            </div>
          </div>
        </div>
      </div>
    
      );
    }
  } 
  export default withTracker(() => {
    Meteor.subscribe('matchs');
    return {
      incompleteCount: MatchsCol.find({}).count(),
      currentUser: Meteor.user(),
    };
  })(Navigation);

