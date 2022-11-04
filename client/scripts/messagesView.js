// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  counter: 0,

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render(Messages._data);
  },

  render: function(messagesArr) {
    // TODO: Render _all_ the messages.
    //iterate through all messages
    //call renderMessage on each message
    console.log(Messages._data.length);
    messagesArr.forEach((message) => MessagesView.renderMessage(message));
    console.log(MessagesView.counter);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //call messageView, get return value
    //JQuery object to store the return value
    var chatMessage = $(MessageView.render(message));
    //append that object to chats
    MessagesView.$chats.append(chatMessage);
    MessagesView.counter++;

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};