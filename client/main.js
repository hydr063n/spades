import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import $ from 'jquery';

import './main.html';

Template.game.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  console.log('HI YOU!', $)
});

Template.game.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.game.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
