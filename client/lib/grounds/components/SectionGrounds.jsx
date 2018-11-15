import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { GroundsCol } from '../../../../imports/api/grounds';
import Headergrounds from './Headergrounds';
import Grounds from './Grounds';
import { Meteor } from 'meteor/meteor';

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
          <Headergrounds onClickSearchGo={this.handleSearch} onClickSortRate={this.handleSortRate}/>
          <div className="sectionground-div-row">
            {this.renderGrounds()}
            <div className="sectionground-groupwhile"></div>  
          </div>
        </div>
      );
    }
  }

  export default withTracker(() => {
    Meteor.subscribe('grounds');
    return {
      grounds: GroundsCol.find({}, { sort: { createdAt: 1 } }).fetch(),           
      };
})(SectionGrounds);
