// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      //Messages.push(data);

      //iterate through data where i = length of data, i > 0, i --
      var limit = Messages._data.length;
      for (var i = data.length - 1; i >= limit; i--) {
        //push each element to the Messages
        Messages.push(data[i]);
        Rooms.updateList(data[i]);
      }

      RoomsView.render();
      MessagesView.initialize();



      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
    App.stopSpinner();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
