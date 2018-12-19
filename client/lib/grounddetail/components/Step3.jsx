import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import { MatchsCol } from '../../../../imports/api/matchs';
import { CommentCol } from '../../../../imports/api/comments';
import { withTracker } from 'meteor/react-meteor-data';
import  Rate from '../../components/Rating.jsx';
import Matchs from '../../matchs/components/section/Matchs.jsx';

const customStyles = {
  content : {
    top                   : '52%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -52%)',
    width                 : '682px',
    height             : '320px',
    borderRadius          :0,
    padding: '0px'
  }
};

Modal.setAppElement('body');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.content = React.createRef();
  }


  openModal = (e) => {
    e.preventDefault();
    this.setState({modalIsOpen: true});
  
  }

  afterOpenModal = () =>  {
    this.subtitle.style.color = '#f00';
  }

  closeModal = (e) =>  {
    e.preventDefault();
    this.setState({modalIsOpen: false});
    const name = this.props.name;
    const dayop = this.props.dayop;
    const starttime = this.props.starttime;
    const endtime = this.props.endtime;
    const players = this.props.players;
    const rating = this.props.rating;
    const day = this.content.current.value;
    const location = this.props.location;
    Meteor.call('matchs.insert',name,dayop,starttime,endtime,players,rating,day,location);
    console.log(day)
  }

  closeModalcancel = () =>  {
    this.setState({modalIsOpen: false});
  }

  render() {
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    let name,role;
    if (loggedIn) {
      if (currentUser.profile.roles == "admin")
      {
        name = <p className="section__title regular f_34">{currentUser.profile.teamname}</p>
        role =   <p className="section__stadium regular f_24">{currentUser.profile.roles}</p>
      }
      if (currentUser.profile.roles == "user") {
        name = <p className="section__title regular f_34">{currentUser.profile.teamname}</p>
        role =   <p className="section__stadium regular f_24">{currentUser.profile.roles}</p>
      }
    } 
    return (
      <div>
        <li className="nav__links bold f_24 g_5">
        <button className="nav__links bold f_24 g_5" onClick={this.openModal} ><a>ĐĂNG BÀI</a></button>
        </li>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          >
          <h2 ref={subtitle => this.subtitle = subtitle}></h2>
          <div className="stp3__">
          <div className="section__abv">
            <div className="section__abvleft">
              <div className="section__abvleftdiv">
                <img className="section__abv-leftimg" src={this.props.logo} alt="" />
              </div>
              <span className="section__abv-leftrate">
                <Rate rate={Number(this.props.rate)}/>
              </span>
            </div>
            <div className="section__formabv-right">
              {name}
              {role}
              <input type="textarea" className="form-control" ref={this.content} placeholder="Nhập nội dung " />
              {/* <div className="section__time">
                <div className="section__time-number light f_60 gr">{moment(day).format('DD')}</div>
                <div className="section__time-day regular f_24"> 
                  <span className="section__time-dayabv">{moment(day).format('dddd')}</span>
                  <span className="section__time-daybl">{moment(day).format('MMM')} {moment(day).format('YYYY')}</span>
                </div>
                <div className="section__time-from regular f_24">
                  <span className="section__time-dayabv">From:</span>
                  <span className="section__time-dayabv">To:</span>
                </div>
                <div className="regular f_24 gr">
                  <span className="section__time-dayabv">{this.props.matchs.starttime}</span>
                  <span className="section__time-dayabv">{this.props.matchs.endtime}</span>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="section__bl">
            <div className="section__blleft">
              <span className="icon-king"></span>
              <span className="section__blleft-user">
              <img className="section__blleft-userimg" src={this.props.matchs.avt} alt="" />
              </span>
              <span className="regular f_24">{this.props.matchs.username}</span>
            </div>
            <div className="section__blright">
              <img src="img/topbar/people.svg" className="section__blrightlg"></img>
              <span className="regular gr f_24">{this.props.matchs.players} Players</span>
            </div>
            {modal}
          </div> */}
        </div>
          
    
          <div className="stp2__footer">
            <div className="stp2__footerwrap">
              <div className="stp3__footerwrap">
                <span className="icon-cancel"></span>
                <p onClick={this.closeModalcancel} className="stp2__footertext regular f_28 gr">Hủy bỏ</p>
              </div>
              <Link className="stp2__a" to="/matchs">
              <button onClick={this.closeModal} className="stp3__footerbtn regular f_28 wt">

              <span className="stp__2-btntext"> Đăng bài viết </span>
              </button>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default withTracker(() => {
  Meteor.subscribe('users');
  Meteor.subscribe('matchsshow');
  Meteor.subscribe('comments');
  return {
    currentUser: Meteor.user(),
    matchs: MatchsCol.find({}, { sort: { createdAt: -1 } }).fetch(),  
    comments: CommentCol.find({}, { sort: { createdAt: -1 } }).fetch(),  
  };
})(App);