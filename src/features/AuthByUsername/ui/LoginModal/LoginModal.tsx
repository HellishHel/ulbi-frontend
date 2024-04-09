import { FC } from "react";
import { Modal } from "shared/ui/Modal/Modal";

import { LoginForm } from "../LoginForm/LoginForm";

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
    <Modal onClose={onClose} isOpen={isOpen} className={className} lazy>
      <LoginForm />
    </Modal>
  );
};
