import React, { Component } from 'react';
import	Modal from './Modal';
import  Rate from '../../../components/Rating';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

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
    let day = this.props.matchs.dateop.toString();
    let starttime = this.props.matchs.starttime;
    let endtime = this.props.matchs.endtime;
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    let modal;
    if (loggedIn) {
      if (currentUser.username !== this.props.matchs.username)
      {
        modal = <Modal  
        location={this.props.matchs.location}
        name={this.props.matchs.team} 
        logo={this.props.matchs.logo}
        user={this.props.matchs.username}
        players={this.props.matchs.players}
        stadium={this.props.matchs.name}
        avt={this.props.matchs.avt}
        day = {moment(day).format('dddd')}
        date = {moment(day).format('DD')}
        month = {moment(day).format('MMM')}
        year = {moment(day).format('YYYY')}
        starttime = {this.props.matchs.starttime}
        endtime = {this.props.matchs.endtime}
        rate = {parseInt(this.props.matchs.rating)}
      />
      }
    } 
    return ( 
      <div className="section_div">
        <div className="section__form">
          <div className="section__abv">
            <div className="section__abvleft">
              <div className="section__abvleftdiv">
                <img className="section__abv-leftimg" src={this.props.matchs.logo} alt="" />
              </div>
              <span className="section__abv-leftrate">
                <Rate rate={Number(this.props.matchs.rating)}/>
              </span>
            </div>
            <div className="section__formabv-right">
              <p className="section__title regular f_34">{this.props.matchs.team}</p>
              <p className="section__stadium regular f_24">
                <span className="icon-logogrey section__stadiumimg"></span> {this.props.matchs.name}
              </p>
              <div className="section__time">
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
              </div>
            </div>
          </div>
          <div className="section__bl">
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
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('users');
  return {
    currentUser: Meteor.user(),
  };
})(Matchs);
