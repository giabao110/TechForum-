import React from 'react';
import { Link } from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';

class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
  }

  forgot = (e) =>  {
    e.preventDefault();
    let email = this.email.current.value;
    Accounts.forgotPassword({email: email}, function (e, r) {
      if (e) {
        return swal({
          title: e.reason,
          text: "Vui lòng thử lại hoặc tạo một tài khoản mới",
          timer: 1700,
          showConfirmButton: false,
          type: "error"
      }); 
      } else {
          alert("Email đã được gửi thành công")
      }
    }); 
  }

    render() {
      return (
        <div className="bg-img">
          <div className="bg-wrapregis">
            <nav className="login__logo nav__items ">
              <span className="icon-brand"></span>
              <Link to="/" className="nav__logo-brand-name f_36" href="/">
                  Tech<span className="bold">Forum</span></Link>
            </nav>
          </div>
          <form className="login__frm" onSubmit={this.forgot}>
            <div className="football__wraperlogin">
              <div className="contain">
                <h1 className="light f_70 wt">Quên Mật Khẩu</h1>
                <hr className="regis__hr">
                </hr> 
                <label htmlFor="email" className="regular f_24 wt">Email</label>
                <input type="email" className="regular f_22" placeholder="Nhập email" ref={this.email} required/>
                <button type="submit" className="btn regular f_32 wt">Tiếp tục</button>
                <div className="login__">
                  <Link to="/login" className="light f_24  wt">
                  Quay lại đăng nhập</Link>
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
  })(Forgot);



    