import { INCREMENT, DECREMENT } from '../types';

const initialState = {
    counter: 0
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: Math.max(state.counter - 1, 0)
            }
        default: 
            return state;
    }
}