import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';
import { createForms } from 'react-redux-form';
import { Token } from './token';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            token: Token,
            ...createForms({
                feedback: InitialFeedback
            }),
            
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}