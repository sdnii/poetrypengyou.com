import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import poem from "./poem.reducer";
import word from "./word.reducer";
import character from "./character.reducer";
import nextPoem from "./nextPoem.reducer";
import lastPoem from "./lastPoem.reducer";
import allPoems from "./allPoems.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  poem, // will have poem data
  word, // will have word data
  // character, // will have character data
  nextPoem, // will have next poem data
  lastPoem, // will have last poem data
  allPoems, // will have all poems data
});

export default rootReducer;
