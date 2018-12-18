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
              title: "Tài khoản không chính xác !",
              text: "Vui lòng nhập lại !!!",
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
      facebook = (e) => {
        Meteor.loginWithFacebook({
          requestPermissions: ['user_friends', 'public_profile', 'email']
        }, (err) => {
          if (err) {
            throw new Meteor.Error("Facebook login failed");
          } else {
            console.log('FACEBOOK: ',Meteor.user());
            this.props.history.push('/')
          }
        });
      }
    }
  render() {
      return (
        <div className="bg-img">
          <div className="bg-wrapregis">
            <nav className="login__logo nav__items">
              <span className="icon-brand"></span>
              <Link to="/" className="nav__logo-brand-name f_36" href="/">
                  Tech<span className="bold">Forum</span></Link>
            </nav>
          </div>
          <form className="login__frm" onSubmit={this.login}>
            <div className="football__wraperlogin">
              <div className="contain">
                <h1 className="light f_70 wt">Đăng nhập</h1>
                <hr className="regis__hr">
                </hr> 
                <label htmlFor="email" className="regular f_24 wt">Tên đăng nhập</label>
                <input ref={this.username} type="text" className="regular f_22" name="username" required/>
                <label htmlFor="psw"  className="regular f_24 wt">Mật khẩu</label>
                <input ref={this.password} type="password" className="regular f_22" name="psw" required/>
                <button type="submit" id="login-buttons-password" className="btn regular f_32 wt">Đăng nhập</button>
                <div className="login__">
                  <Link to="/forgot" className="light f_24 wt">
                  Quên mật khẩu</Link>
                  <Link to="/register" className="light f_24  wt">
                  Tạo tài khoản</Link>
                </div>
                <h1>{this.facebook}</h1>
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


    