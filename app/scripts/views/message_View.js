const url = "http://tiny-za-server.herokuapp.com/collections/"
const db = "nealchatroom";  // Data Base that we're working with
const moment = require('moment'); // Use moment to create timestamp
let timestamp = (moment().format('LLLL')); // Creates and formats timestamp
let currentUser; // Used for adding the delete Button
let currentChatHistory; // Used for comparing current and history chat




function Message(username,body) {  // Constructor for message
	this.sender = username;
	this.body = body;
	this.timestamp = timestamp; // Creates instance of timestamp
	this.save = function() {
							let postData = {  // for posting to chat
								sender: this.sender, //sender name
								body: this.body, // sender message
								timestamp: this.timestamp, // timestamp of message

							}
							let settings = { // settings for posting to tiny-za-server
								type: 'POST',
								contentType: 'application/json',
								url: url+db,
								data: JSON.stringify(postData)
							}
							return $.ajax(settings).then(function(data,status,xhr) {
								console.log(data,status);
								getChatHistory();  // Calls getChatHistory
							});
	}
}
