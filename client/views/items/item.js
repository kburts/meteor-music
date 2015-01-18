
Template.item.helpers({

  myHelper: function () {
    return 1
  }
});

Template.items.rendered = function () {
  //
};

Template.item.rendered = function () {
  //
};

Template.item.events({

  'click .delete': function(event, instance){
    var item = this;
    event.preventDefault();
    Meteor.call('removeItem', item, function(error, results) {
      Router.go('/items');
    });
  }

});
