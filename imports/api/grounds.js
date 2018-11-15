import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const GroundsCol = new Mongo.Collection('grounds');
 
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('grounds', function tasksPublication() {
    return GroundsCol.find();
  });
}

Meteor.methods({
  'grounds.insert'(namesta,content,location,dateop,starttime,endtime,price,rating,hoursfree,image,status,players) {
    check(namesta, String);
    check(status, Boolean);
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    GroundsCol.insert({
      _id: new Mongo.ObjectID(),
      namesta,
      content,
      location,
      dateop: new Date(dateop),
      starttime,
      endtime,
      price,
      rating,
      hoursfree,
      image,
      status,
      players,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'grounds.remove'(groundId) {
    GroundsCol.remove(groundId);
  }
});