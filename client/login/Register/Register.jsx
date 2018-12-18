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
                title: "Mật khẩu không chính xác !!!",
                text: "Vui lòng nhập lại !!!",
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
                    logoteam: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",
                    avt:"https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
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
          <div className="bg-wrapregis">
              <nav className="login__logo nav__items">
                <div>
                  <span className="icon-brand"></span>
                  <Link to="/" className="nav__logo-brand-name f_36" href="/">
                  Tech<span className="bold">Forum</span></Link>
                </div>
              </nav>
            </div>
            <form className="login__frm" onSubmit={this.regis}>
              <div className="football__wraperlogin">
                <div className="regis__contain">
                  <span className="regular f_70 wt">TẠO TÀI KHOẢN</span>
                  <hr className="regis__hr">
                  </hr> 
                  <div className="regis__">
                    <div className="regis__div">
                      <p htmlFor="psw" className="regis__divlb regular f_24 wt">Tên đăng nhập</p>
                      <input type="text" className="regis__input regular f_22 g_1" ref={this.username}required/>
                    </div>
                    <div className="regis__div">
                      <p htmlFor="psw" className="regis__divlb2 regis__spa regular f_24 wt">Email</p>
                      <input type="email" className="regis__input regular f_22 g_1" ref={this.email}required/> 
                    </div>
                  </div>
                  <div className="regis__">
                    <div className="regis__div">
                      <p htmlFor="psw" className="regis__divlb regular f_24 wt">Mật khẩu</p>
                      <input type="password" className="regis__input regular f_22 g_1" ref={this.password}required/>
                    </div>
                    <div className="regis__div">
                      <p htmlFor="psw" className="regis__divlb2 regis__spa regular f_24 wt">Nhập lại mật khẩu</p>
                      <input type="password" className="regis__input regular f_22 g_1" ref={this.passwordagain} required/>
                    </div>
                  </div>
                  <div className="regis__">
                    <div className="regis__div">
                      <p htmlFor="psw" className="regis__divlb regular f_24 wt">Ngày sinh</p>
                      <input type="date" className="regis__input regular f_22 g_1"/>
                    </div>
                    <div className="regis__div">
                      <p htmlFor="psw" className="regis__divlb2 regis__spa regular f_24 wt">Giới tính</p>
                      <div className="regis__input">
                      <input type="radio" defaultChecked/>
                          <label className="regular f_24 wt regis_ck" >Nam</label>  
                      <input type="radio"/>
                          <label className="regular f_24 wt regis_ck" >Nữ</label>  
                      <input type="radio"/>
                          <label className="regular f_24 wt regis_ck" >Chưa rõ</label>  
                      </div>
                    </div>
                  </div>

                  <div className="regis__">
                  <div className="regis__div">
                    <p htmlFor="psw"  className="regis__divlb regular f_24 wt">Tên thành viên</p>
                    <input type="text" className="regis__input regular f_22 g_1" ref={this.teamname}required/>
                  </div>
                  <div className="regis__div">
                      <p htmlFor="psw" className="regis__divlb2 regis__spa regular f_24 wt">Số điện thoại</p>
                      <input type="password" className="regis__input regular f_22 g_1" />
                    </div>
                  </div>
                   <button type="submit" className="btn regular f_32 wt" >TẠO TÀI KHOẢN</button>
                  <div className="login__">
                    <Link to="/login" className="regular f_24 wt">Quay về đăng nhập</Link>
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



    