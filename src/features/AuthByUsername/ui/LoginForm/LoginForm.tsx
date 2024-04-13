import { classNames } from "shared/lib/classNames";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";

import { getLoginState } from "../../model/selectors/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions } from "../../model/slice/loginSlice";

import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
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
  );
});
