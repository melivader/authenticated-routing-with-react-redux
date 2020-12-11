import { ThunkDispatch as Dispatch } from "redux-thunk";

import * as constants from "../constants";

export interface IAuthenticate {
  type: constants.AUTHENTICATE;
}

function authenticate(): IAuthenticate {
  return {
    type: constants.AUTHENTICATE,
  };
}

export interface IUnauthenticated {
  type: constants.UNAUTHENTICATED;
}

function unauthenticated(): IUnauthenticated {
  return {
    type: constants.UNAUTHENTICATED,
  };
}

export type AuthenticationAction = IAuthenticate | IUnauthenticated;

export function logIn() {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    await window.localStorage.setItem("authenticated", "true");
    dispatch(authenticate());
  };
}

export function logOut() {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    await window.localStorage.setItem("authenticated", "false");
    dispatch(unauthenticated());
  };
}

export function checkAuthentication() {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    const auth = await window.localStorage.getItem("authenticated");
    const formattedAuth = typeof auth === "string" ?
      JSON.parse(auth) :
      null;

    formattedAuth ? dispatch(authenticate()) : dispatch(unauthenticated());
  };
}
