import React from 'react';
import Comments from './Comments';
import History from './History';
import Info from './Info';
import GroundInfo from './GroundInfo';
import { withTracker } from 'meteor/react-meteor-data';
import { GroundsCol } from '../../../../imports/api/grounds';

class Grounddetail extends React.Component {
  renderInfo() {
    return this.props.grounds.map((grounds) => (
      <Info key={grounds._id} grounds={grounds} />
    ));
  }
    render() {
      return (
          <div>
            <GroundInfo/>
            <Info/>
            <div className="headerground__layout">
            <Comments/>
            <History/>
          </div>
      </div>
      );
    }
  }
  
  export default withTracker(() => {
    return {
      grounds: GroundsCol.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
  })(Grounddetail);
