import React from 'react';
import { Meteor } from 'meteor/meteor';
import  Rate from '../../components/Rating';

export default class Listmatchs extends React.Component {
  deleteThisGrounds() {
    console.log(this.props.match._id);
    Meteor.call('matchs.remove', this.props.match._id);
  }   
  updateThisGrounds(){
    this.props.handleEdit(this.props.match);
  }

  render() {
      return (
        <tr>
        {/* Index */}
        <th scope="row">{this.props.index}</th>
        {/* Team */}
        <td>{this.props.match.team}</td>
        {/* Name */}
        <td>{this.props.match.name}</td>
        {/* Owner */} 
        <td>{this.props.match.username}</td>
        {/* OPDay */} 
        <td>{moment(this.props.match.dateop.toString()).format('DD/MM/YY')}</td>
        {/* Start Time */} 
        <td>{this.props.match.starttime}</td>
        {/* End Time */} 
        <td>{this.props.match.endtime}</td>
        {/* Rating */} 
        <td>
          <Rate rate={Number(this.props.match.rating)}/>
        </td>
        {/* Players */} 
        <td>{this.props.match.players}</td>
        <td></td>
        <td>
          <button type="button" className="matchs__btnsz btn-danger" onClick={this.updateThisGrounds.bind(this)}>Update</button>
          <button type="button" className="matchs__btnsz btn-warning" onClick={this.deleteThisGrounds.bind(this)}>Remove</button>
        </td>
      </tr>
      );
    }
  }
  