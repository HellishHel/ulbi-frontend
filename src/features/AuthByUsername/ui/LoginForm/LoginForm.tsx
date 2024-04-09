import { classNames } from "shared/lib/classNames";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input placeholder={t("enterLogin")} autoFocus />
      <Input placeholder={t("enterPassword")} />
      <Button className={cls.loginBtn}>{t("login")}</Button>
    </div>
  );
};
