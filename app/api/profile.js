import { API_URL } from "./config";
import { AUTH_ENDPOINT, REGISTRATION_ENDPOINT, PROFILE_ENDPOINT } from "./endpoints";

export const authRequest = phone => {
    return fetch(API_URL + AUTH_ENDPOINT, {})
}

export const registrationRequest = phone => {
    return fetch(API_URL + REGISTRATION_ENDPOINT, {})
}

export const profileRequest = () => {
    return fetch(API_URL + PROFILE_ENDPOINT, {})
}
