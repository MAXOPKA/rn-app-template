import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { authRequest, registrationRequest, profileRequest } from '../api/profile'
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL,
    GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL
} from '../redux/action_types/profileActionTypes'

function* login(action) {
    try {
        const response = yield call(authRequest, action.payload.phone);
        yield put({type: LOGIN_SUCCESS, userToken: response});
    } catch (e) {
        yield put({type: LOGIN_FAIL, message: e.message});
    }
}

function* registration(action) {
    try {
        const user = yield call(registrationRequest, action.payload.user);
        yield put({type: REGISTRATION_SUCCESS, user: user});
    } catch (e) {
        yield put({type: REGISTRATION_FAIL, message: e.message});
    }
}

function* getInfo(action) {
    try {
        const user = yield call(profileRequest, action.payload.userId);
        yield put({type: GET_USER_INFO_SUCCESS, user: user});
    } catch (e) {
        yield put({type: GET_USER_INFO_FAIL, message: e.message});
    }
}

function* profileSaga() {
    yield takeLatest(LOGIN_REQUEST, login);
    yield takeLatest(REGISTRATION_REQUEST, registration);
    yield takeLatest(GET_USER_INFO_REQUEST, getInfo);
}

export default profileSaga