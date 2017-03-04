import { LOGIN_SUCESS } from '../actions';
import { LOGIN_ERROR } from '../actions';

let cloneObj = function(obj){
  return JSON.parse(JSON.stringify(obj))
}

let newState = { user: { loggedIn: false } };

export default function(state, action){
  switch (action.type) {
    case LOGIN_SUCESS:
      newState = cloneObj(state);
      newState.user.loggedIn = true;
      return newState;
    case LOGIN_ERROR:
      newState = cloneObj(state);
      newState.user.loggedIn = false;
      return newState;
    default:
      return state || newState;
  }
};
