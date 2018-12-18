import React, { Component } from 'react';
import '/node_modules/bootstrap';
import { withTracker } from 'meteor/react-meteor-data';
import { MatchsCol } from '../../../../../imports/api/matchs';
import Header from '../Header';
import Matchs from './Matchs';
import Slider from './Slider';
import { Meteor } from 'meteor/meteor';

class Section extends Component {
    constructor(props) {
      super(props);
      this.state = {
        strSearch: '',
        strSortRate: '',
        strDay: '',
      };
    }

    renderMatchs = () =>{
      let matchs= this.props.matchs;

      if(this.state.strDay.toString() !== '')
      matchs = matchs.filter(match => match.day === this.state.strDay.toString());

      if(this.state.strSortRate.toString() !== '')
        matchs = matchs.filter(match => match.rating.toString() === this.state.strSortRate);

      if(this.state.strSearch.toString() !== '')
      {
      matchs = matchs.filter(match => match.team.toLowerCase().includes(this.state.strSearch.toLowerCase()));
      }

      return matchs.map((matchss) =><Matchs key={matchss._id} matchss={matchss}/>)
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

    handleDay= (value) =>{
      this.setState({
        strDay: value
      });
    }
    
    render() {
      return (
      <div>
         <Header onClickSearchGo={this.handleSearch} onClickSortRate={this.handleSortRate}/>
         <Slider matchs={this.renderMatchs()} handlegetDay={this.handleDay}/>
      </div>
			);
		}
	}

  export default withTracker(() => {
    Meteor.subscribe('matchs');
    return {
      matchs: MatchsCol.find({}, { sort: { createdAt: -1 } }).fetch(),           
    };
  })(Section);
