import { classNames } from "shared/lib/classNames";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setIsAuthModal(false);
  }, [setIsAuthModal]);

  const onOpen = useCallback(() => {
    setIsAuthModal(true);
  }, [setIsAuthModal]);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={onOpen} theme={ButtonTheme.CLEAR_INVERTED}>
        {t("login")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onClose} />
    </div>
  );
};
