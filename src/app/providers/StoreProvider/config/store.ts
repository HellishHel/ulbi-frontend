import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";

import { StateSchema } from "./StateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
  });
};
