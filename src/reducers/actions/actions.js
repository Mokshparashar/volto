/**
 * Actions reducer.
 * @module reducers/actions
 */

import { GET_ACTIONS } from '../../constants/ActionTypes';

const initialState = {
  error: null,
  actions: [],
  loaded: false,
  loading: false,
};

/**
 * Actions reducer.
 * @function actions
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function actions(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_ACTIONS}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
      };
    case `${GET_ACTIONS}_SUCCESS`:
      return {
        ...state,
        error: null,
        actions: action.result.actions,
        loaded: true,
        loading: false,
      };
    case `${GET_ACTIONS}_FAIL`:
      return {
        ...state,
        error: action.error,
        actions: [],
        loaded: false,
        loading: false,
      };
    default:
      return state;
  }
}
