import { AnyAction, applyMiddleware, createStore, Middleware, MiddlewareAPI, Dispatch } from "redux";
import ErrorHandler from "../services/error/error-handler/ErrorHandler";
import { StoreAction, StoreActionResolver } from "../models/types";
import ActionResolverRegister from "./action-resolvers";
import reducers from "./reducers";

const storeMiddleware: Middleware<{}, RootState, Dispatch<AnyAction>> = (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction | any) => {
  const resolver: StoreActionResolver = ActionResolverRegister[action.type];
  if (!!resolver) {
    return resolver(api.dispatch, action.payload, api.getState())
      .then((response: StoreAction | void) => {
        if (!!response) {
          return next(response);
        }
        return next(action);
      })
      .catch((error) => ErrorHandler.handle(error));
  } else {
    return next(action);
  }
};

export const store = createStore(reducers, applyMiddleware(storeMiddleware));
export type RootState = ReturnType<typeof reducers>;
