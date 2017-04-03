import moment from 'moment';

export default function Views(store) {

  funciton deleteButtonHandler(e) {
    let i = e.currentTarget.id;
    store.dispatch({type:"DELETE_CHAT_BY_ID",idToDelete:i})
  }

  function loginHandler(e) {
    let name = $('#username-form').val();
    store.dispatch({type:"LOGIN",username:name});
  }

  function chatSubmitHandler(e){
    let body = $('chat-form').val();
    store.dispatch({type: "SUBMIT_NEW_CHAT", username:name})
  }




}
