import { INCREMENT, DECREMENT } from '../types';


/**
 * increase the value of the counter
 */

export const incrementAction = () => dispatch => {
    dispatch({ type: INCREMENT });
}

export const decrementAction = () => dispatch => {
    dispatch({ type: DECREMENT });
}