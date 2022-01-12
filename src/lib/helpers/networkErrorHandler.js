/*
  Saga Error Handler
*/

// import AppActions, { AppTypes } from "containers/App/actions"

import { put, race, take } from "redux-saga/effects"
import NotificationAction from "containers/Notifications/actions"
import { push } from "react-router-redux"
import { get } from "lodash"
import convert from "xml-js"

export default function* handleError(responce, ErrorAction, action) {
  let { problem, data, status } = responce

  if (process.env.NODE_ENV === "development") {
    console.group("Network Error")
    console.log("network", problem, data, status)
    console.groupCollapsed("ACTION", action.type)
    console.log(action)
    console.groupEnd()
    console.groupEnd()
  }

  switch (problem) {
    // case "CLIENT_ERROR":
    //   if (status === 403) {
    //     yield put(AppActions.userTokenExpired(action))
    //     const [error, , ,] = yield race([
    //       take(AppTypes.USER_TOKEN_EXPIRED),
    //       take(AppTypes.USER_TOKEN_VALID),
    //       take(AppTypes.USER_TOKEN_INVALID),
    //       take(AppTypes.LOGOUT_ATTEMPT)
    //     ])
        // log out the user on consecutive 401s
      //   if (error) {
      //     yield put(AppActions.logoutAttempt())
      //   }
      // } else if (status === 401) {
      //   yield put(AppActions.updateStatus("Unauthorized user"))

      //   try {
      //     if (typeof data === "string") {
      //       let smlData = JSON.parse(
      //         convert.xml2json(data, { compact: true, spaces: 2 })
      //       )
      //       yield put(
      //         AppActions.userAuthFailed(
      //           get(
      //             smlData,
      //             "['ams:fault']['ams:message']._text",
      //             "Unauthorized user"
      //           ),
      //           true,
      //           401,
      //           {
      //             code: get(smlData, "ams:fault.ams:code._text", 401),
      //             description: get(
      //               smlData,
      //               "ams:fault.ams:description._text",
      //               401
      //             )
      //           }
      //         )
      //       )
      //     } else {
      //       yield put(AppActions.userAuthFailed("Unauthorized", true, 401))
      //     }
      //   } catch (e) {
      //     console.log(e)
      //     yield put(
      //       AppActions.userAuthFailed(
      //         "Unknown Authorization Error, Contact Support if persists",
      //         true,
      //         401
      //       )
      //     )
      //   } finally {
      //     yield put(push("/401"))
      //   }
      // } else {
      //   yield put(ErrorAction(data.message, true))
      // }
      // break
    case "NETWORK_ERROR":
      yield put(ErrorAction("Unable to connect to services", true))
      yield put(
        NotificationAction.setToast({
          level: "danger",
          title: "NETWORK ERROR",
          text:
            "Unable to establish a connection with services, please check your internet connection."
        })
      )
      break
    case "SERVER_ERROR":
      yield put(
        NotificationAction.setToast({
          level: "danger",
          title: "SERVER ERROR",
          text: data.message
        })
      )
      yield put(
        ErrorAction(
          "Server Error, Please try again or contact support if presists",
          true
        )
      )

      break
    case "TIMEOUT_ERROR":
      yield put(
        NotificationAction.setToast({
          level: "danger",
          title: "NETWORK TIMEOUT"
        })
      )
      yield put(
        ErrorAction(
          "Network Timeout, Please Retry",
          true
        )
      )
      break
    default:
      yield put(
        NotificationAction.setToast({
          level: "danger",
          title: "UNKNOWN ERROR",
          text: "Unknown Error occurred, Please Refresh the page and try again."
        })
      )
      yield put(
        ErrorAction(
          "Unknown Error occurred, Please Refresh the page and try again.",
          true
        )
      )
  }
}
