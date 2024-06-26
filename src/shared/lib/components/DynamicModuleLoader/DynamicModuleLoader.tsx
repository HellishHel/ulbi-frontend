import { FC, PropsWithChildren, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

export interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<
  PropsWithChildren<DynamicModuleLoaderProps>
> = ({ reducers, children, removeAfterUnmount = false }) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
