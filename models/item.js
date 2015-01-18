// collections.js

Items = new Meteor.Collection('items');

Items.allow({
  insert: function(userId, doc){
    return can.createItem(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return can.editItem(userId, doc);
  },
  remove:  function(userId, doc){
    return can.removeItem(userId, doc);
  }
});

// Methods

Meteor.methods({
  createItem: function(title, body){
    currentUserId = Meteor.userId();
    if(can.createItem(currentUserId)) {
      var newItem = Items.insert({title: title, body: body, userId: currentUserId});
      return newItem;
    }
    else {
      throw new Meteor.Error(403, 'You do not have the rights to create a new item.')
    }
  },
  removeItem: function(item){
    if(can.removeItem(Meteor.userId(), item)){
      Items.remove(item._id);
    }else{
      throw new Meteor.Error(403, 'You do not have the rights to delete this item.')
    }
  }
});
