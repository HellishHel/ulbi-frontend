import {
  AnyAction,
  configureStore,
  DeepPartial,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducers: ReducersMapObject<StateSchema, AnyAction> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
