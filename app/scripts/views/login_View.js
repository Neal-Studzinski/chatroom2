export default function (store) {
  let $html = $(`
    <section id="app">
    `
}
$('#loginBtn').on('click',function(e){ // login button creates new UserSession
  let formVal = $('#userName').val();
  currentUser = new UserSession(formVal); // User Session constructor
  chat_View();

  function UserSession(username) {   // Constructor for user session
  	console.log("creating user ", username) // Shows console log 'creating user...'
  	this.username = username;
  }

  function renderLoginView() { // Shows login, hides chat
  	$('.chat_View').hide();
  	$('.login_View').show();
  }

  function loadView() { // loads views with delete button as needed
  	if (currentUser) {
  		console.log("user is ", currentUser)
  		renderChatView();
  	}
  	else {
  		console.log("No user logged in! ", currentUser) // shows no user in console log
  		renderLoginView(); // shows login
  	}
  }
