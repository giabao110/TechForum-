import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
export const HistoryCol = new Mongo.Collection('historys');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('historys', function tasksPublication() {
    return HistoryCol.find();
  });
}
