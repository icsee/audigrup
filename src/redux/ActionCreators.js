import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import {InitialFeedback} from './forms'




export const postFeedback = (firstname,telnum, email, message,token) => (dispatch) => {

          const newFeedback = {
            fullName: firstname,
            phoneNumber: telnum,
            email:email,
            issue:message
        };

        return fetch(baseUrl + 'contacts', {
          method: "POST",
          body: JSON.stringify(newFeedback),
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": token,
            
          },
          credentials: "same-origin"
        })
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
              throw error;
        })
        .then(response => response.json())
        .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
        
}

function getCookie(name) {
  if (!document.cookie) {
    return null;
  }

  const xsrfCookies = document.cookie.split(';')
    .map(c => c.trim())
    .filter(c => c.startsWith(name + '='));

  if (xsrfCookies.length === 0) {
    return null;
  }
  return decodeURIComponent(xsrfCookies[0].split('=')[1]);
}



export const addToken = (token) => ({
  type: ActionTypes.ADD_TOKEN,
  payload: token
  


  });


export const fetchToken = () => (dispatch) => {

  dispatch(tokenLoading(true));

  return fetch(baseUrl + 'token')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.text()) 
  .then(token => {dispatch(addToken(token))})
  .catch(error => dispatch(tokenFailed(error.message)));
}

export const tokenLoading = () => ({
  type: ActionTypes.TOKEN_LOADING
});

export const tokenFailed = (errmess) => ({
  type: ActionTypes.TOKEN_FAILED,
  payload: errmess
});





