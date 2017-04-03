import { createStore } from 'redux'
import Server from './server.js'

export default function app() {
  const initialState = {
    items: []
  }
  const appReducer = function(state,action) {
    if (state === undefined) {
      state = initialState;
    }
    switch (action.type) {
      case "TESTING":
        console.log("It works!");
        console.log(state);
        return state



      default:
        return state;
    }

  }


  const store = createStore(appReducer);
  const server = new Server (store);
  store.dispatch({type: "TESTING"});
  server.hello();
}
