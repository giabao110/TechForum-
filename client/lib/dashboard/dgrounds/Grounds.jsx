import React from 'react';
import Listgrounds from "./Listgrounds";
import { withTracker } from 'meteor/react-meteor-data';
import { GroundsCol } from '../../../../imports/api/grounds';
import Insertground from './Insertground';

class Grounds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strEdit: '',
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(value){
    this.setState({
      strEdit: value
    });
  }

  renderListmatchs() {
    console.log("strEdit:",this.state.strEdit);
    return this.props.grounds.map((ground, index) => (
      <Listgrounds key={index} ground={ground} index={index} handleEdit={this.handleEdit}/>
      ));
    }

    render() {
      return (
        <div>
          <table className="regular f_24 table table-dark">
            <thead>
              <tr className="bold f_24">
                <th scope="col">#</th>
                <th scope="col">Stadium</th>
                <th scope="col">Content</th>
                <th scope="col">Location</th>
                <th scope="col">Rating</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">OPDay</th>
              </tr>
            </thead>
            <tbody>
              {this.renderListmatchs()}
            </tbody>
          </table>
          <Insertground edit={this.state.strEdit}/>
      </div>
        );
      }
    }
    export default withTracker(() => {
      Meteor.subscribe('grounds');
      Meteor.subscribe('matchs');
      return {
        grounds: GroundsCol.find({}, { sort: { createdAt: 1 } }).fetch(),
      };
    })(Grounds);
  