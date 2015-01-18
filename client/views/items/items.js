Template.items.created = function() {
  //
};

Template.items.helpers({
  //
});

Template.items.rendered = function() {
  //
};

Template.items.events({
  'submit form': function(event) {
    event.preventDefault();
    var title = event.target.title.value;
    var body = event.target.body.value;

    console.log(title);
    console.log(body);
    console.log(this);
    Meteor.call('createItem', title, body, function(error, results) {
      newItem = results;
      Router.go('item', {_id: newItem});
      //console.log(results);

    });
  }
});
