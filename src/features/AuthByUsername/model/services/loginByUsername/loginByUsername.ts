import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchema } from "features/AuthByUsername";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { ThunkConfig } from "app/providers/StoreProvider";

type LoginByUsernameProps = Pick<LoginSchema, "username" | "password">;

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  "login/loginByUsername",
  async (authData, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>("/login", authData);

      if (!response?.data) {
        throw new Error();
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data),
      );
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue("error");
    }
  },
);
