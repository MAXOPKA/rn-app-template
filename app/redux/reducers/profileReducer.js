import {handleActions} from "redux-actions";
import initialState from '../initial_state/profileState';
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_CANCEL,
    REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL, REGISTRATION_CANCEL,
    GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL, GET_USER_INFO_CANCEL,
    LOGOUT
} from '../action_types/profileActionTypes';

export default handleActions(
    {
        LOGIN_REQUEST: (state, action) => ({

        }),
        LOGIN_SUCCESS: (state, action) => ({

        }),
        LOGIN_FAIL: (state, action) => ({

        }),
        LOGIN_CANCEL: (state, action) => ({

        }),
        REGISTRATION_REQUEST: (state, action) => ({

        }),
        REGISTRATION_SUCCESS: (state, action) => ({

        }),
        REGISTRATION_FAIL: (state, action) => ({

        }),
        REGISTRATION_CANCEL: (state, action) => ({

        }),
        GET_USER_INFO_REQUEST: (state, action) => ({

        }),
        GET_USER_INFO_SUCCESS: (state, action) => ({

        }),
        GET_USER_INFO_FAIL: (state, action) => ({

        }),
        GET_USER_INFO_CANCEL: (state, action) => ({

        }),
        LOGOUT: (state, action) => ({
            authToken: null
        }),
    },
    initialState
);


