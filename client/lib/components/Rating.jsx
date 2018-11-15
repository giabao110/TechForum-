var Rating = require('react-rating');
import React from 'react';

export default class Rate extends React.Component {
  render() {
    return (
        <Rating
          emptySymbol={<i className="icon-star" />}
          fullSymbol={<i className="icon-star2" />}
          initialRating={this.props.rate}
          readonly
        />
      );
    }
  }
