import React from 'react';
import { Meteor } from 'meteor/meteor';
import TextHistory from './TextHistory';
import { withTracker } from 'meteor/react-meteor-data';
import { HistoryCol } from '../../../../imports/api/historys';

class History extends React.Component {
  renderHistorys() {
    return this.props.historys.map((history) => (
      <TextHistory key={history._id} history={history} />
    ));
  }  
    render() {
      return (
      <div className="info__right">
        <div className="headerground__title">
          <span className="regular f_40">History <span className="headerground__title-count f_24 g_3">( {this.props.incompleteCount} )</span></span>
        </div>
        <div className="headerground-wrap">
          {this.renderHistorys()}
        </div>
     </div>
      );
    }
  }
  
  export default withTracker(() => {
    Meteor.subscribe('historys');
    return {
      historys: HistoryCol.find({}, { sort: { createdAt: -1 } }).fetch(),
      incompleteCount: HistoryCol.find({ checked: { $ne: true } }).count(),
    };
  })(History);
