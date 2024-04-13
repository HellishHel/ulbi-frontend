import { classNames } from "shared/lib/classNames";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { useDispatch, useSelector } from "react-redux";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, [setIsAuthModal]);

  const onOpen = useCallback(() => {
    setIsAuthModal(true);
  }, [setIsAuthModal]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED}>
          {t("logout")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={onOpen} theme={ButtonTheme.CLEAR_INVERTED}>
        {t("login")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onClose} />
    </div>
  );
};
