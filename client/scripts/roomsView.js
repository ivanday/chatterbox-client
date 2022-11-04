// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.$select.on('change', (event) => {
      console.log($('#rooms select:selected'));
    });

  },

  // add all the rooms we have to the select dropdown menu
  render: function() {
    // TODO: Render out the list of rooms.

    /*
    <select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    */
    //iterate through the keys of our Rooms.data
    //append the key to our $select
    Object.keys(Rooms._data).forEach((value) => {
      RoomsView.$select.append('<option value=' + value + '>' + value + '</option>');
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    //empty #chat
    MessagesView.$chats.empty();
    var messages = Rooms._data[roomname];
    MessagesView.render(messages);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
