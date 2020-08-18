import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import profileReducer from './redux/reducers/profileReducer';
import initialState from './redux/initial_state/profileState';
import reducer from './redux/reducers/profileReducer'
import profileSaga from './saga/profileSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const loggerMiddleware = createLogger()

let rootReducer = combineReducers({
    profile: profileReducer
})

let rootState = {
    profile: initialState,
};

const store = createStore(
    rootReducer,
    rootState,
    applyMiddleware(
        thunkMiddleware,
        sagaMiddleware,
        loggerMiddleware
    ));

sagaMiddleware.run(profileSaga)

function selectAuthToken(state) {
    return state.authToken;
}

let authToken = null;
export const getAuthToken = () => authToken

function handleChange() {
    authToken = selectAuthToken(store.getState());
}

const unsubscribe = store.subscribe(handleChange);

export default store;