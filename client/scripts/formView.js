// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    //when clicking submit, run our handleSubmit function
    FormView.$form.on('submit', FormView.handleSubmit);

    //$('form .submit').on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    // get username, get room name, get message text
    var data = {
      username: App.username,
      roomname: App.room,
      text: $('#message').val()
    };
    // create obj, call Parse.post(obj)
    // call fetch again to update data
    // re-render messages
    Parse.post(data, (response) => {
      console.log(response);
      App.fetch();
      //MessagesView.render();
    });
    //App.fetch();
    //console.log('click!');
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};