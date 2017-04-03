import { createStore } from 'redux';
import Server from './server.js';
import views from './views.js';

export default function app() {
  const initialState = { items: [], }
  const appReducer = function(state,action) {

    if (state === undefined) {
      state = initialState;
    }
    switch (action.type) {
      case "VISITOR_ARRIVES":
        views.welcomeVisitor();
        return state
      case


      default:
        return state;
    }

  }


  const store = createStore(appReducer);
  const server = new Server (store);
  store.dispatch({type: "TESTING"});
  server.hello();
}
