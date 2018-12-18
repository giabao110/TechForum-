import React from 'react';
import { Link } from "react-router-dom";
import ReadMoreReact from 'read-more-react';
import  Rate from '../../components/Rating';

export default class Grounds1 extends React.Component {
    render() {
      let hours = moment().startOf('day').fromNow(); 
      this.props.grounds.createdAt = hours;
      return (
      <div className="sectionground-group2">
        <div className="sectionground-img2">
          <div >
            <Link to={`/Grounddetail/${this.props.grounds._id._str}`}>
            <img className="sectionground-imgg" src={this.props.grounds.image} alt=""/>
            <div className="overlay">
              <p className="regular f_40 wt">
                {this.props.grounds.namesta}
              </p>
                <p className="regular f_40 wt">
              </p>
            </div>
            </Link>
          </div>
          <Link to={`/Grounddetail/${this.props.grounds._id._str}`}></Link>
        </div>
        <div className="sectionground-content">
            <div className="sectionground-content-title regular">
              <span className="f_34 g_3">{this.props.grounds.namesta}</span>
            </div>
            <div className="sectionground-content-info">
              <div className="sectionground-location f_24 gr">
                <ReadMoreReact text={this.props.grounds.username}
                  min={80}
                  ideal={100}
                  max={200} />
              </div>
              <div className="sectionground-content-right">
                {/* <span className="f_36 gr">${this.props.grounds.price}.00</span> */}
                <span id="hour" className="f_20 gr">{this.props.grounds.createdAt}</span>
              </div>
            </div>
          </div>
      </div>
      );
    }
  }