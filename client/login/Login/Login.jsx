import React from 'react';
import { Link } from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
  }

  login = (e) => {
    e.preventDefault();
    const user = this.username.current.value;
    const pass = this.password.current.value;

    if (user !== '' || pass !== '')
      {
        Meteor.loginWithPassword(user, pass, (error) => {
          if (error) {
            return swal({
              title: "Email or password Incorect",
              text: "Please try again or create an account",
              timer: 1700,
              showConfirmButton: false,
              type: "error"
          });
          } else {
            console.log('Login Successfully')
            this.props.history.push('/')
          }
        });  
      }
    }
  render() {
      return (
        <div className="bg-img">
          <div className="bg-wrap">
            <nav className="login__logo nav__items">
              <span className="icon-brand"></span>
              <Link to="/" className="nav__logo-brand-name regular f_36" href="/">
              Football<span className="bold">Party</span></Link>
            </nav>
          </div>
          <form className="login__frm" onSubmit={this.login}>
            <div className="football__wraper">
              <div className="contain">
                <h1 className="light f_70 wt">Sign In</h1>
                <hr className="regis__hr">
                </hr> 
                <label htmlFor="email" className="regular f_24 wt">Username</label>
                <input ref={this.username} type="text" className="regular f_22" placeholder="Username" name="username" required/>
                <label htmlFor="psw"  className="regular f_24 wt">Password</label>
                <input ref={this.password} type="password" className="regular f_22" placeholder="Enter Password" name="psw" required/>
                <button type="submit" id="login-buttons-password" className="btn regular f_32 wt">Login</button>
                <div className="login__">
                  <Link to="/forgot" className="light f_24 wt">
                  Forgot Password</Link>
                  <Link to="/register" className="light f_24  wt">
                  Create Account</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        )
      }
    }
    export default withTracker(() => {
      Meteor.subscribe('users');
      return {
        currentUser: Meteor.user(),
      };
    })(Login);


    