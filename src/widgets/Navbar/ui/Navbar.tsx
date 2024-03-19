import { classNames } from "shared/lib/classNames";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, [setIsAuthModal]);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED}>
        {t("login")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        content
      </Modal>
    </div>
  );
};
