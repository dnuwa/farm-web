import { takeLatest, put, call, getContext } from 'redux-saga/effects';
import { get } from 'lodash';
import ManagerActions, { ManagerTypes } from "./actions";
import { loginApi } from './api';

function* formSubmitSaga(loginApi, action) {
  let { payload, target, authToken } = action;

  try {
    const { ok, data, ...rest } = yield call(
      loginApi(authToken), {...payload }, target);

    if (ok) {
      yield put(ManagerActions.formSubmitSuccess(data.data));
      // yield put(push(`/documents/grid/${data.productCode}`));
      // if (!target) {
      //   yield put(
      //     NotificationAction.setToast({
      //       level: "success",
      //       title: "Record Saved",
      //     })
      //   );
      // } else {
      //   yield put(
      //     NotificationAction.setToast({
      //       level: "success",
      //       title: "Record updated",
      //     })
      //   );
      // }
    } else {
      yield put(ManagerActions.formSubmitError(data));
    }
  } catch (e) {
    console.log(e);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  let api = yield getContext("apiService");

  yield takeLatest(
    ManagerTypes.FORM_SUBMIT_ATTEMPT,
    formSubmitSaga,
    loginApi(api)
  );

}
