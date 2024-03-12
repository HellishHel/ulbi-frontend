import { classNames } from "shared/lib/classNames";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reload = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t("PageError")}</p>
      <Button onClick={reload}>{t("reload")}</Button>
    </div>
  );
};
