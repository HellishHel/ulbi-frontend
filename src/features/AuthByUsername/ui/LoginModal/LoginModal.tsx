import { classNames } from "shared/lib/classNames";
import { FC } from "react";
import { Modal } from "shared/ui/Modal/Modal";

import { LoginForm } from "../LoginForm/LoginForm";

import cls from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

// TODO: при lazy не отрабатывает первичная анимация

export const LoginModal: FC<LoginModalProps> = ({
  className,
  onClose,
  isOpen,
}) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      className={classNames(cls.LoginModal, {}, [className])}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
