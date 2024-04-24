import { classNames, Mods } from "shared/lib/classNames/classNames";
import {
  FC,
  MouseEvent,
  MutableRefObject,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Portal } from "shared/ui/Portal/Portal";

import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose?.();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const onKeydown = useCallback(
    (event: any) => {
      if (event.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler],
  );

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeydown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isOpen, onKeydown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
