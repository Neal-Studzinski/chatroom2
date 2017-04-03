export default function Server(store) {
  const url = "http://tiny-za-server.herokuapp.com/collections/nealchatroom2"
  var settings = {contentType: 'application/json'}

  this.getChatHistory = function() {
    console.log("Get server database");
    settings.type = 'GET'; // settings for posting to tiny-za-server
    settings.url = url;
      $.ajax(settings).then(function(data,status,xhr) {
        console.log(data,status);
        store.dispatch({type: "UPDATE_CHAT_HISTORY_VIEW",history:data});
  })

}
  this.postToServer = function(state,action) {
    console.log("state,action ",state,action);
    settings.url = url;
    settings.data = JSON.stringify( {
      sender: state.username,
      body: action.chatBody,
      timestamp: new Date()
    })
    settings.type = "POST";
      $.ajax(settings).then(function(data, status, xhr) {
        console.log("Data from server ", data)
        store.dispatch({type: "REQUEST_CHAT_HISTORY_DATA"})
      })
  }
    this.deleteChatById = function(id) {
      settings.type = "DELETE";
      settings.url = url + '/' + id;
        $.ajax(settings).then(function(data, status, xhr) {
          console.log("Data from server ", data)
          store.dispatch({type: "REQUEST_CHAT_HISTORY_DATA"})
        })

    }



}
