import { classNames } from "shared/lib/classNames/classNames";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
} from "../../model/selectors/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";

import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = { loginForm: loginReducer };

const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === "fulfilled") {
      onSuccess?.();
    }
  }, [onSuccess, dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t("Authorization")} />
        {error && (
          <Text theme={TextTheme.ERROR} text={t("wrongUsernameOrPass")} />
        )}
        <Input
          placeholder={t("enterLogin")}
          autoFocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          placeholder={t("enterPassword")}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          disabled={isLoading}
          onClick={onLoginClick}
        >
          {t("login")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
