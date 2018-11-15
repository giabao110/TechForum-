import React from 'react';
import Listmatchs from "./Listmatchs";
import { withTracker } from 'meteor/react-meteor-data';
import { MatchsCol } from '../../../../imports/api/matchs';

class Matchs extends React.Component {
  renderListmatchs() {
    return this.props.matchs.map((match, index) => (
      <Listmatchs key={index} match={match} index={index} handleEdit={this.handleEdit}/>
      ));
    }

    render() {
      return (
        <div>
        <table className="regular f_24 table table-dark">
          <thead>
            <tr className="bold f_24">
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Stadium</th>
              <th scope="col">Owner</th>
              <th scope="col">OPDay</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
              <th scope="col">Rating</th>
              <th scope="col">Players</th>
            </tr>
          </thead>
          <tbody>
            {this.renderListmatchs()}
          </tbody>
        </table>
      </div>
      );
    }
  }
    export default withTracker(() => {
      Meteor.subscribe('matchs');
      return {
        matchs: MatchsCol.find({}, { sort: { createdAt: 1 } }).fetch(),
      };
    })(Matchs);
  