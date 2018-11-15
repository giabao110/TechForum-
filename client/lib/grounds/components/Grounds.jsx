import React from 'react';
import { Link } from "react-router-dom";
import ReadMoreReact from 'read-more-react';
import  Rate from '../../components/Rating';

export default class Grounds extends React.Component {
    render() {
      return (
      <div className="sectionground-group">
        <div className="sectionground-img">
          <div className="hovereffect">
            <Link to={`/Grounddetail/${this.props.grounds._id._str}`}>
            <img className="sectionground-imgg" src={this.props.grounds.image} alt=""/>
            <div className="overlay">
              <p className="regular f_40 wt">
                {this.props.grounds.namesta}
              </p>
              <p className="regular f_40 wt">
                <Rate rate={Number(this.props.grounds.rating)}/>
              </p>
            </div>
            </Link>
          </div>
          <Link to={`/Grounddetail/${this.props.grounds._id._str}`}>
          <div className="sectionground-content">
            <div className="sectionground-content-title regular">
              <span className="f_34 g_3">{this.props.grounds.namesta}</span>
            </div>
            <div className="sectionground-content-info">
              <div className="sectionground-location f_24 g_1">
                <ReadMoreReact text={this.props.grounds.location}
                  min={80}
                  ideal={100}
                  max={200} />
              </div>
              <div className="sectionground-content-right">
                <span className="f_36 gr">${this.props.grounds.price}.00</span>
                <span id="hour" className="f_20 gr">/hour</span>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
      );
    }
  }