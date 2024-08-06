import { classNames, Mods } from "shared/lib/classNames/classNames";
import { FC } from "react";

import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

type TextAlign = "center" | "left" | "right";

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text: FC<TextProps> = ({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = "left",
}) => {
  const mods: Mods = {
    [cls[theme]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className, cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
