import { AnyAction, configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

import { StateSchema } from "./StateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema, AnyAction> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: rootReducers,
    devTools: __IS_DEV__,
  });
};
