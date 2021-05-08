import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initStore = (initialState, options) => {
  let composeEnhancers = compose;

  // Check if function running on the sever or client
  if (!options.isServer) {
    // Setup Redux Debuger
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const store = createStore(rootReducer, initialState, composeEnhancers(
    // Applying redux-thunk middleware
    applyMiddleware(thunk),
  ));

  return store;
};

export default initStore;
