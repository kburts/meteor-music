can = {
  createItem: function (userId) {
    return true;
  },
  editItem: function (userId, item) {
    return userId === item.userId;
  },
  removeItem: function (userId, item) {
    return userId === item.userId;
  }
}
