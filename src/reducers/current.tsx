import { IAuthenticate, IUnauthenticated } from "../actions/current";
import { AUTHENTICATE, UNAUTHENTICATED } from "../constants";
import { ICurrent } from "../types";

export default function currentReducer(
  state: ICurrent = {
    uuid: null,
    isAuthenticated: null,
  },
  action: IAuthenticate | IUnauthenticated,
): ICurrent {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, uuid: "placeholder-uuid", isAuthenticated: true };
    case UNAUTHENTICATED:
      return { uuid: null, isAuthenticated: false }
  }
  return state;
}
