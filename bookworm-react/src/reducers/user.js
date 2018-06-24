import { USER_LOGGED_IN } from "../types";

// reducer is just a function that takes action and state and returns a new state
export default function user(state = {}, action = {}) {
    switch(action.type) {
        case USER_LOGGED_IN:
            return action.user
        default: return state;
    }
}