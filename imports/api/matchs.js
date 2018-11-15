import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const MatchsCol = new Mongo.Collection('matchs');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('matchs', function tasksPublication() {
    return MatchsCol.find();
  });
}

Meteor.methods({
  'matchs.insert'(name,dateop,starttime,endtime,players,rating,day,location) {
    MatchsCol.insert({
      _id: new Mongo.ObjectID(),
      name,
      dateop: new Date(dateop),
      starttime,
      endtime,
      players,
      rating,
      day,
      location,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
      team: Meteor.users.findOne(this.userId).profile.teamname,
      logo: Meteor.users.findOne(this.userId).profile.logoteam,
      avt: Meteor.users.findOne(this.userId).profile.avt,
    });
  },

  'matchs.remove'(matchId) {
    MatchsCol.remove(matchId);
  }
});
