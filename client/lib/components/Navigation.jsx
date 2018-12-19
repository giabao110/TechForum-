import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import { MatchsCol } from '../../../imports/api/matchs';
import { Meteor } from 'meteor/meteor';
import Step3 from '../grounddetail/components/Step3.jsx';
import { GroundsCol } from '../../../imports/api/grounds';
import { withRouter } from "react-router-dom";

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
      this.props.history.push('/');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/');
    }
  }
  
  logout = () => {
    Meteor.logout((error) => {
    if (error) {
        console.log(error);
    } else {
        this.props.history.push('/')
      }
    });  
  }
    render() { 
      let currentUser = this.props.currentUser;
      let userDataAvailable = (currentUser !== undefined);
      let loggedIn = (currentUser && userDataAvailable);
      let dashboard,avt,them;
      avt = <Link to="/login" className="bold f_24 g_5">ĐĂNG NHẬP</Link>;
      if (loggedIn) {
        if (currentUser.profile.roles == "admin")
        {
          dashboard = <li><Link to="/dashboard">Dashboard</Link></li>;
          them = <Step3  logo={currentUser.profile.avt}  
          rate={currentUser.profile.rating}
/>; 
          avt = <img className="nav__user-img" src={currentUser.profile.avt} alt=""/>;
        }
        if (currentUser.profile.roles == "user") {
          dashboard = <li><Link to="/profile">Thông tin</Link></li>;
          them =   <Step3  logo={currentUser.profile.avt}  
                                rate={currentUser.profile.rating}
          />; 
          avt = <img className="nav__user-img" src={currentUser.profile.avt} alt=""/>;
        }

      } 
      return(
        <div className="navdiv">
      <div className="nav">
        <div className="football__wrapernav">
          <div className="nav__wrap">
            <nav className="nav__items">
              <div>
                <span className="icon-brand"></span>
                <Link to="/" className="nav__logo-brand-name f_36" href="/">
                Tech<span className="bold">Forum</span></Link>
              </div>
              <form className="padding padding-search form-inline ">    
                <input className="nav__search regular f_24" type="search" placeholder="Tìm bài viết, sản phẩm, nhóm, ..." aria-label="Search" />
              </form>
              <ul className="nav__links bold f_24">
                <li>
                  <Link to="/">
                  TIN TỨC</Link>
                </li>
                <li>
                  <Link to="/matchs">
                  DIỄN ĐÀN</Link>
                </li>
                <span className="regular f_20 ">{this.props.incompleteCount}</span>
                {/* <li>
                  <Link to="/profile">
                  THÔNG TIN</Link>
                </li> */}
                {dashboard}
                {them}
              </ul>
            </nav>
            <div className="nav__right">
              <div className="nav__user">
                {avt}
              </div>
              <div className="dropdown medium f_24 g_5">
                <a className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                { loggedIn ? currentUser.username : '' }
                </a>
                { loggedIn ?  
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item medium f_24 g_5" href="#">Thay đổi mật khẩu</a>
                  <a className="dropdown-item medium f_24 g_5" href="#">Thông tin thành viên</a>
                  <a onClick={this.logout} className="dropdown-item medium f_24 g_5" href="#">Đăng xuất</a>
                </div>
                : '' }
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="navtopbar">
            <div className="football__wrapertop">
              <div className="nav__topbar">
                <li className="topbar medium f_24">Android</li>
                <li className="topbar medium f_24">iOS</li>
                <li className="topbar medium f_24">MacOS</li>
                <li className="topbar medium f_24">Windows</li>
                <li className="topbarright medium f_24">Không có sự kiện nào sắp diễn ra</li>
              </div>
              </div>
              </div>
    </div>
      );
    }
  } 
  export default withRouter(withTracker((props) => {
    Meteor.subscribe('matchs');
    Meteor.subscribe('grounds');
    return {
      incompleteCount: MatchsCol.find({}).count(),
      currentUser: Meteor.user(),
      grounds: GroundsCol.find({_id: new Mongo.ObjectID(props.match.params.GroundID)}, { sort: { createdAt: -1 } }).fetch(),
    };
  })(Navigation))