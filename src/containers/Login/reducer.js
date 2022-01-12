import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { ManagerTypes } from './actions'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  userInfo: false,
})

/* ------------- Reducers ------------- */

// std Error
export const stdError = (state, { payload }) =>
  state.merge({ fetching: false, error: payload })

export const getFormSubmitSuccess = (state, { payload }) =>
  state.merge({
    fetching: false,
    error: null,
    userInfo: payload
  })


/* ------------- Hookup Reducers To AppTypes ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [ManagerTypes.FORM_SUBMIT_SUCCESS]: getFormSubmitSuccess,
  [ManagerTypes.FORM_SUBMIT_ERROR]: stdError,
})

export default reducer

