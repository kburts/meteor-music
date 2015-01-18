Messages = new Meteor.Collection(null);

flash = function (message, messageType) {
  var type = typeof messageType === 'undefined' ? 'success' : messageType;
  Messages.remove({});
  Messages.insert({
    message: message,
    type: type
  });
}
