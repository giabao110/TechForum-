import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { CommentCol } from '../../../../imports/api/comments';
import { Meteor } from 'meteor/meteor';
import Text from './Text';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
  }
  renderComments() {
    return this.props.comments.map((comment) => (
      <Text key={comment._id} comment={comment} />
    ));
  }  
  handleSubmit(event) {
    event.preventDefault();
    const text = this.text.current.value;
    Meteor.call('comments.insert',text);
    this.text.current.value = "";
  }

  render() {
      return (
        <div className="info__left">
          <div className="headerground__title">
            <span className="regular f_40">Bình luận & Đánh giá <span className="headerground__title-count f_24 g_3">( {this.props.incompleteCount} )</span></span>
          </div>
          <div className="headerground-wrap">
            {this.renderComments()}
            <hr className="sexy_linee"/>
            <form className="headerground__form" onSubmit={this.handleSubmit.bind(this)}>
              <input className="headerground__comment_input regular f_24" placeholder="Nhập bình luận của bạn ..." ref={this.text}/>  
              <button className="headerground__comment_btn regular f_24">GỬI</button>
            </form>
          </div>
        </div>
      );
    }
  }
  
  export default withTracker(() => {
    Meteor.subscribe('comments');
    return {
      comments: CommentCol.find({}, { sort: { createdAt: -1 } }).fetch(),
      incompleteCount: CommentCol.find({ checked: { $ne: true } }).count(),
    };
  })(Comments);

