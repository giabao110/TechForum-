import React, { Component } from 'react';
import	Modal from './Modal';
import  Rate from '../../../components/Rating';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { MatchsCol } from '../../../../../imports/api/matchs';

class Matchs extends Component { 
  constructor(props){
    super(props);
    this.state = this.getMeteorData(),{
      username: ''
    };
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  render() {
    let ngaydang = moment(this.props.matchss.createdAt).format("Do YY, h:mm:ss a"); 
        this.props.matchss.createdAt = ngaydang;
        let myStr = this.props.matchss.content;
    return ( 
      <div className="section_div">
        <div className="section__form">
          <div className="section__abv">
            <div className="section__abvleft">
              <div className="section__abvleftdiv">
                <img className="section__abv-leftimg" src={this.props.matchss.avt} alt="" />
              </div>
              <span className="section__abv-leftrate">
                {/* <Rate rate={Number(this.props.matchs.rating)}/> */}
              </span>
            </div>
            <div className="section__formabv-right">
              <p className="section__title regular f_34">{this.props.matchss.team}</p>
              <div className="section__stadium regular f_24">
              <span className="f_22 g_3" >Người đăng: <span className=" gr f_24" >{this.props.matchss.author}</span>          
              <span className="info__right-hour f_22 g_3">  Ngày đăng: <span className="gr f_24">{this.props.matchss.createdAt}</span></span></span>
              </div>
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
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('users');
  Meteor.subscribe('matchs');
  return {
    currentUser: Meteor.user(),
    matchs: MatchsCol.find({}, { sort: { createdAt: -1 } }).fetch(),  
  };
})(Matchs);
