import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const CommentCol = new Mongo.Collection('comments');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('comments', function tasksPublication() {
    return CommentCol.find();
  });
}

Meteor.methods({
  'comments.insert'(text) {
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    CommentCol.insert({
      _id: new Mongo.ObjectID(),
      author: Meteor.users.findOne(this.userId).username,
      text,
      team: Meteor.users.findOne(this.userId).profile.teamname,
      logo: Meteor.users.findOne(this.userId).profile.logoteam,
     });
  },
});