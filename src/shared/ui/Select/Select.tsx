import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ChangeEvent, FC, memo, useMemo } from "react";

import cls from "./Select.module.scss";

export interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
}

export const Select: FC<SelectProps> = memo(
  ({ className, label, options, value, onChange }) => {
    const mods: Mods = {};

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value);
    };

    const optionsList = useMemo(() => {
      return options?.map(({ value, content }) => (
        <option key={value} value={value} className={cls.option}>
          {content}
        </option>
      ));
    }, [options]);

    return (
      <div className={classNames(cls.wrapper, mods, [className])}>
        {label && <span className={cls.label}>{label + ">"}</span>}
        <select value={value} className={cls.select} onChange={onChangeHandler}>
          {optionsList}
        </select>
      </div>
    );
  },
);
