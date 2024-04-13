import { classNames } from "shared/lib/classNames";
import { ButtonHTMLAttributes, FC } from "react";

import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  square,
  size = ButtonSize.M,
  disabled,
  ...props
}) => {
  return (
    <button
      className={classNames(
        cls.Button,
        { [cls.square]: square, [cls.disabled]: disabled },
        [className, cls[theme], cls[size]],
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
