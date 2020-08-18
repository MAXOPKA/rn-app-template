import {createAction} from "redux-actions";
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_CANCEL,
    REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL, REGISTRATION_CANCEL,
    GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL, GET_USER_INFO_CANCEL,
    LOGOUT
} from "../action_types/profileActionTypes"

export const increment = createAction(LOGIN_REQUEST);
export const increment = createAction(LOGIN_SUCCESS);
export const increment = createAction(LOGIN_FAIL);
export const increment = createAction(LOGIN_CANCEL);

export const increment = createAction(REGISTRATION_REQUEST);
export const increment = createAction(REGISTRATION_SUCCESS);
export const increment = createAction(REGISTRATION_FAIL);
export const increment = createAction(REGISTRATION_CANCEL);

export const increment = createAction(GET_USER_INFO_REQUEST);
export const increment = createAction(GET_USER_INFO_SUCCESS);
export const increment = createAction(GET_USER_INFO_FAIL);
export const increment = createAction(GET_USER_INFO_CANCEL);

export const increment = createAction(LOGOUT);
