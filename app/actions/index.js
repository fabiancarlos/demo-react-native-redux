export const LOGIN_SUCESS = 'LOGIN_SUCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(userCredentials){
  if (userCredentials.username == 'admin' && userCredentials.password == 'adminadmin') {
    return {
      type: LOGIN_SUCESS
    }
  } else {
    return {
      type: LOGIN_ERROR
    }
  }
}
