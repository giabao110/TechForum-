import React from 'react';

export default class TextHistory extends React.Component {
    render() {
      return (
        <div className="headerground__history">
          <div className="headerground__history-logo">
            <img className="headerground__history-img" src={this.props.history.logo} alt=""/>
          </div>
          <div className="headerground__history-content">
            <span className="headerground__history-content-name bold f_30">{this.props.history.name}</span>
            {/* <span className="headerground__history-content-day regular f_22 g_2">{this.props.history.time} chủ đề mới</span> */}
            <span className="headerground__history-content-teams regular f_24 g_2"><span className="gr">{this.props.history.teams}</span> chủ đề mới</span>
            <span className="headerground__history-content-players regular f_24 g_2"><span className="gr">#{this.props.history.name}</span></span>
          </div>
        </div>
      );
    }
  }
  