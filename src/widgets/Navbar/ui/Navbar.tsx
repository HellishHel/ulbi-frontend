import { classNames } from "shared/lib/classNames";
import { FC } from "react";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={"/"}>{t("Main")}</AppLink>
        <AppLink to={"/about"}>{t("About")}</AppLink>
      </div>
    </div>
  );
};
