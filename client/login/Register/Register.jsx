import React from 'react';
import { Link } from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';
import history from '../../../imports/startup/client/routes';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.teamname = React.createRef();
    // this.firstname = React.createRef();
    // this.lasttname = React.createRef();
    this.password = React.createRef();
    this.passwordagain = React.createRef();
    this.email = React.createRef();
    this.username = React.createRef();
  }

  regis = (e) =>  {
    e.preventDefault();
    var email     = this.email.current.value,
        // firstName = this.firstname.current.value,
        // lastName  = this.lasttname.current.value,
        teamname = this.teamname.current.value,
        password  = this.password.current.value,
        passwordAgain = this.passwordagain.current.value,
        username = this.username.current.value;
        
    var trimInput = function(val) {
        return val.replace(/^\s*|\s*$/g, "");
    }
    var email = trimInput(email);

    var isValidPassword = (pwd, pwd2) => {
        if (pwd === pwd2) {
            return pwd.length >= 6 ? true : false;
        } else {
            return swal({
                title: "Passwords don't match",
                text: "Please try again !!!",
                showConfirmButton: true,
                type: "error"
          });
        }
     } 
    
    if (isValidPassword(password, passwordAgain)) { 
          Accounts.createUser({
          email: email,
          username: username,
          password: password,
          profile:  {
                    roles: "user",
                    teamname: teamname,
                    logoteam: "https://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png",
                    avt:"https://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png"
                    }
      }, (error) => {
            if (error) {
                return swal({
                title: error.reason,
                text: "Please try again",
                showConfirmButton: true,
                type: "error"
            });
            } else {
              alert('Register Successfully')
              this.props.history.push('/login')
            }
        });
      }
    return false;
  }
    render() {
      return (
        <div>
          <div className="bg-img">
            <div className="bg-wrap">
              <nav className="login__logo nav__items">
                <div>
                  <span className="icon-brand"></span>
                  <Link to="/" className="nav__logo-brand-name regular f_36" href="/">
                  Football<span className="bold">Party</span></Link>
                </div>
              </nav>
            </div>
            <form className="login__frm" onSubmit={this.regis}>
              <div className="football__wraper">
                <div className="regis__contain">
                  <span className="light f_70 wt">Create Your Account</span>
                  <hr className="regis__hr">
                  </hr> 
                  <div className="regis__">
                    <div className="regis__div">
                      <p htmlFor="psw" className="regis__divlb regular f_24 wt">Username</p>
                      <input type="text" className="regis__input regular f_22" placeholder="Username"ref={this.username}required/>
                    </div>
                    <div className="regis__div">
                      <p htmlFor="psw" className="regis__divlb2 regis__spa regular f_24 wt">Email</p>
                      <input type="email" className="regis__input regular f_22" placeholder="Email Address" ref={this.email}required/> 
                    </div>
                  </div>
                  <div className="regis__">
                    <div className="regis__div">
                      <p htmlFor="psw" className="regis__divlb regular f_24 wt">Password</p>
                      <input type="password" className="regis__input regular f_22" placeholder="Password" ref={this.password}required/>
                    </div>
                    <div className="regis__div">
                      <p htmlFor="psw" className="regis__divlb2 regis__spa regular f_24 wt">Confirm Password</p>
                      <input type="password" className="regis__input regular f_22" placeholder="Confirm Password" ref={this.passwordagain} required/>
                    </div>
                  </div>
                  {/* <div className="regis__">
                    <div className="regis__div">
                      <p htmlFor="email" className="regis__divlb regular f_24 wt">First Name</p>
                      <input type="text" className="regis__input regular f_22" placeholder="First Name" ref={this.firstname} required/>
                    </div>
                    <div className="regis__div">
                      <p htmlFor="email" className="regis__divlb2 regis__spa regular f_24 wt">Last Name </p>
                      <input type="text" className="regis__input regular f_22" placeholder="Last Name" ref={this.lasttname} required/>
                    </div>
                  </div> */}
                  <div className="regis__div">
                    <p htmlFor="psw"  className="regis__divlb regular f_24 wt">Team Name</p>
                    <input type="text" className="regis__input regular f_22" placeholder="Team Name"ref={this.teamname}required/>
                  </div>
                   <button type="submit" className="btn regular f_32 wt" >Create Account</button>
                  <div className="login__">
                    <Link to="/login" className="regular f_24 wt">Sign In</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
  export default withTracker(() => {
    Meteor.subscribe('users');
    return {
      currentUser: Meteor.user(),
    };
  })(Register);



    