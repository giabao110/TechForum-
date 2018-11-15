import React from 'react';
import Step1 from './Step1';
import  Rate from '../../components/Rating';
import { withRouter } from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import { GroundsCol } from '../../../../imports/api/grounds';
import ReadMoreReact from 'read-more-react';

class Info extends React.Component {
    render() {
        if(this.props.grounds.length === 0) return ''
        let day = this.props.grounds[0].dateop.toString(),
        starttime = this.props.grounds[0].starttime,
        endtime = this.props.grounds[0].endtime;
        return (
        <div className="info">
          <div className="info__left">
            <img className="info__left-img" src={this.props.grounds[0].image} alt=""/>
          </div>
          <div className="info__right">
            <title className="info__right-title medium f_60">{this.props.grounds[0].namesta}</title>
            <p className="info__right-title-s regular f_24 g_1">{this.props.grounds[0].location}</p>
            <Rate rate={Number(this.props.grounds[0].rating)}/>
            <hr className="info__right-rate-border"/>
            <div className="info__content-about">
              <div className="info__right-user-div">
                <img className="info__right-user" src="http://www.one-versus-one.com/img/rounds/avatar-round-ronaldo.png" alt=""/>
              </div>
              <div className="info__right-name regular">
                <p className="f_24" >{this.props.grounds[0].username}</p>
                <p className="f_22 g_2" >Owner</p>
              </div>
            </div>
            <div className="info__right-content regular f_24">
              <ReadMoreReact text={this.props.grounds[0].content}
                      min={10}
                      ideal={50}
                      max={100} />
            </div>
            <p className="info__right-price regular f_46 gr">${this.props.grounds[0].price}.00<span className="info__right-price-s regular f_24 g_3">/hr</span></p>
            <div className="info__right-button">
              <Step1  name={this.props.grounds[0].namesta} 
                      location={this.props.grounds[0].location}
                      team={this.props.grounds[0].team}
                      day = {moment(day).format('dddd')}
                      date = {moment(day).format('DD')}
                      month = {moment(day).format('MMMM')}
                      year = {moment(day).format('YYYY')}
                      starttime = {moment(starttime,'HH:mm').format('hh:mm a')}
                      endtime = {moment(endtime,'HH:mm').format('hh:mm a')}
                      players = {this.props.grounds[0].players}
                      dayop = {this.props.grounds[0].dateop}
                      rating = {this.props.grounds[0].rating}
              />
              <div className="info__right-farvo regular f_24">
                <span className="icon-farvo info__right-farvoicon"></span>
                <a className="info__right-farvo-img-p g_3" href="">
                  <p>Farvorite</p>
                </a>
              </div>
              <div className="info__right-share regular f_24">
                <span className="icon-share info__right-farvoicon"></span>
                <a className="info__right-farvo-img-p g_3" href="">
                  <p className="g_3">Share</p>
                </a>
              </div>
            </div>
            <p className="info__right-hour regular f_22 gr"><span className="f_36">{this.props.grounds[0].hoursfree}</span> hours <span className="info__right-hours g_4">Available Today</span></p>
          </div>
        </div>
        );
      }
    }
  export default withRouter(withTracker((props) => {
    Meteor.subscribe('grounds');
    return {
      grounds: GroundsCol.find({_id: new Mongo.ObjectID(props.match.params.GroundID)}, { sort: { createdAt: -1 } }).fetch(),
    };
  })(Info)) 


