import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { GroundsCol } from '../../../../imports/api/grounds';
import Headergrounds from './Headergrounds';
import Grounds from './Grounds';
import Grounds1 from './Grounds1';
import Grounds2 from './Grounds2';
import { Meteor } from 'meteor/meteor';
import { Link } from "react-router-dom";

class SectionGrounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch: '',
      strSortRate: '',
    };
  }

  renderGrounds = () =>{
    let grounds= this.props.grounds;

    // if(this.state.strDay.toString() !== '')
    // matchs = matchs.filter(match => match.day === this.state.strDay.toString());

    if(this.state.strSortRate.toString() !== '')
      grounds = grounds.filter(ground => ground.rating.toString() === this.state.strSortRate);

    if(this.state.strSearch.toString() !== '')
      grounds = grounds.filter(ground => ground.namesta.toLowerCase().includes(this.state.strSearch.toLowerCase()));
    
    return grounds.map((grounds) =><Grounds key={grounds._id} grounds={grounds}/>)
  }

  renderGroundss = () =>{  
    let groundss= this.props.groundss;
    return groundss.map((groundss) =><Grounds1 key={groundss._id} grounds={groundss}/>)
  }

  renderGroundsss = () =>{  
    let groundsss= this.props.groundsss;
    return groundsss.map((groundsss) =><Grounds2 key={groundsss._id} grounds={groundsss}/>)
  }

  handleSearch = (value) =>{
    this.setState({
      strSearch: value
    });
  }

  handleSortRate= (value) =>{
    this.setState({
      strSortRate: value
    });
  }

    render() {
      return (
        <div>
          
          {/* <Headergrounds onClickSearchGo={this.handleSearch} onClickSortRate={this.handleSortRate}/> */}
          <div className="sectionground">
            <div className="sectionground-top">
              {this.renderGrounds()}
            </div>
            <div className="sectionground-div-row">
              {this.renderGroundss()}
              {/* <div className="sectionground-groupwhile"></div>*/}
            </div>
          </div>

          <div className="sectionground-div">
            <div className="sectionground-div-tag">
            <Link to="/" className="sectionground-title bold g_3 f_30" href="/">CỘNG ĐỒNG</Link>
                <div className="sectionground-div-child">
                  dsadas
                </div>
             
            </div>
            <div className="sectionground-div-collumn">
              {this.renderGroundsss()}
            </div>
          </div>
        
        </div>
      );
    }
  }

  export default withTracker(() => {
    Meteor.subscribe('grounds');
    return {
      grounds: GroundsCol.find({}, { sort: { createdAt: 1}, skip:(0), limit: 2 }).fetch(),    
      groundss: GroundsCol.find({}, { sort: { createdAt: 1}, skip:(2),limit: 3 }).fetch(),    
      groundsss: GroundsCol.find({}, { sort: { createdAt: 1}, skip:(5) }).fetch(),    
      };
})(SectionGrounds);
