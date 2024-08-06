import { classNames } from "shared/lib/classNames/classNames";
import { CSSProperties, FC, useMemo } from "react";

import cls from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = ({
  className,
  src,
  size = 100,
  alt,
}) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  return (
    <img
      alt={alt || ""}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
};
