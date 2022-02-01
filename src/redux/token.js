import * as ActionTypes from './ActionTypes';


export const Token = (state = { isLoading: true,
    errMess: null,
    token:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TOKEN:
            return {...state, isLoading: false, errMess: null, token: action.payload};

        case ActionTypes.TOKEN_LOADING:
            return {...state, isLoading: true, errMess: null, token: []}

        case ActionTypes.TOKEN_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};