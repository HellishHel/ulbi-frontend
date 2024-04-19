import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
} from "./getLoginState";

describe("getLoginError", () => {
  test("is error", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: "error",
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual("error");
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual("");
  });
});

describe("getLoginLoading", () => {
  test("is loading true", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});

describe("getLoginPassword", () => {
  test("has password", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "123123",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("123123");
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});

describe("getLoginUsername", () => {
  test("has username", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "user",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("user");
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
