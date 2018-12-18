import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const MatchsColl = new Mongo.Collection('matchsshow');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('matchsshow', function tasksPublication() {
    return MatchsColl.find();
  });
}

Meteor.methods({
  'matchsshow.insert'(name) {
    MatchsColl.insert({
      _id: new Mongo.ObjectID(),
      name,
    });
  },

  'matchsshow.remove'(matchId) {
    MatchsCol.remove(matchId);
  }
});
