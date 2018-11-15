// import React from 'react';
// import { Link } from "react-router-dom";
// import { Meteor } from 'meteor/meteor';
// import { Accounts } from 'meteor/accounts-base';
// import { withTracker } from 'meteor/react-meteor-data';

// class Forgot extends React.Component {
//   constructor(props) {
//     super(props);
//     this.email = React.createRef();
//   }

//   forgot = (e) =>  {
//     e.preventDefault();
//     let email = this.email.current.value;
//     Accounts.forgotPassword({email: email}, function (e, r) {
//       if (e) {
//         return swal({
//           title: e.reason,
//           text: "Please try again or create an account",
//           timer: 1700,
//           showConfirmButton: false,
//           type: "error"
//       }); 
//       } else {
//           alert("Send Email Successfully")
//       }
//     }); 
//   }

//     render() {
//       return (
//         <div className="bg-img">
//           <div className="bg-wrap">
//             <nav className="login__logo nav__items">
//               <span className="icon-brand"></span>
//               <Link to="/" className="nav__logo-brand-name regular f_36">
//               Football<span className="bold">Party</span></Link>
//             </nav>
//           </div>
//           <form className="login__frm" onSubmit={this.forgot}>
//             <div className="football__wraper">
//               <div className="contain">
//                 <h1 className="light f_70 wt">Forgot Password</h1>
//                 <hr className="regis__hr">
//                 </hr> 
//                 <label htmlFor="email" className="regular f_24 wt">Email</label>
//                 <input type="email" className="regular f_22" placeholder="Please type your email" ref={this.email} required/>
//                 <button type="submit" className="btn regular f_32 wt">Next</button>
//                 <div className="login__">
//                   <Link to="/login" className="light f_24  wt">
//                   Sign In</Link>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       )
//     }
//   }
//   export default withTracker(() => {
//     Meteor.subscribe('users');
//     return {
//       currentUser: Meteor.user(),
//     };
//   })(Forgot);



    