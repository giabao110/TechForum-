import React from 'react';
import { Meteor } from 'meteor/meteor';
import  Rate from '../../components/Rating';

export default class Listgrounds extends React.Component {
  deleteThisGrounds() {
    console.log(this.props.ground._id);
    Meteor.call('grounds.remove', this.props.ground._id);
  }   
  updateThisGrounds(){
    this.props.handleEdit(this.props.ground);
  }

  render() {
      return (
        <tr>
        {/* Index */}
        <th scope="row">{this.props.index}</th>
        {/* Stadium */}
        <td>{this.props.ground.namesta}</td>
        {/* Content */}
        <td>{this.props.ground.content}</td>
        {/* Location */} 
        <td>{this.props.ground.location}</td>
        {/* Rating */} 
        <td>
          <Rate rate={Number(this.props.ground.rating)}/>
        </td>
        {/* Price */} 
        <td>${this.props.ground.price}</td>
        {/* Status */} 
        <td>{this.props.ground.status.toString()}</td>
        {/* OPDay */} 
        <td>{moment(this.props.ground.dateop.toString()).format('DD/MM/YY')}</td>
        <td>
          <button type="button" className="matchs__btnsz btn-danger" onClick={this.updateThisGrounds.bind(this)}>Update</button>
          <button type="button" className="matchs__btnsz btn-warning" onClick={this.deleteThisGrounds.bind(this)}>Remove</button>
        </td>
      </tr>
      );
    }
  }

  