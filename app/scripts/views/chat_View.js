function renderChatHistory(item){ // Creates output with delete button
		let element = '<li class="list-group-item"><p>'+item.timestamp+ " "+'<p>' +item.sender+'</p>'+" "+item.body
		if (item.sender == currentUser.username) // logged in
			element += '<button type="button" class="btn btn-default deleteBtn" id="'+item._id+'">Delete</button>';
		element += '</li>'  // wrappes up the list
		$('.list-group').prepend(element); // adds element to the bottom using prepend
}

$('.list').on('click', '.deleteBtn', function(e){ // Deletes the list item
  deleteListItem(e.currentTarget.id);
})

$('#submitBtn').on('click',function(e){ // Saves new message
  console.log(currentUser, currentUser.username)
  let formVal = $('#newItemForm').val();
  let newMsg = new Message(currentUser.username,formVal); // Message constructor
  newMsg.save();
})
