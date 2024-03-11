import { classNames } from "shared/lib/classNames";
import { FC } from "react";

import "./Loader.scss";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames("lds-ripple", {}, [className])}>
      <div></div>
      <div></div>
    </div>
  );
};
