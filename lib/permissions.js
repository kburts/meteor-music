can = {
  createItem: function (userId) {
    return userId != null;
    //return Meteor.userUd() != null;
    //return true;
  },
  editItem: function (userId, item) {
    return userId === item.userId;
  },
  removeItem: function (userId, item) {
    return userId === item.userId;
  }
}
