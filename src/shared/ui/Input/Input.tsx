import { classNames, Mods } from "shared/lib/classNames/classNames";
import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autoFocus,
    readonly = false,
    ...props
  }) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);
    const isCaretVisible = isFocused && !readonly;

    const onChangeHandler = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCaretPosition(event.target.value.length);
      },
      [onChange],
    );

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autoFocus, setIsFocused]);

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (e: any) => {
      setCaretPosition(e.target.selectionStart || 0);
    };

    const mods: Mods = {
      [cls.readonly]: readonly,
    };

    return (
      <div className={classNames(cls.container, mods, [className])}>
        {placeholder && <div>{placeholder + ">"}</div>}
        <div className={cls.wrapper}>
          <input
            ref={ref}
            className={cls.input}
            type={type}
            value={value}
            onChange={onChangeHandler}
            onBlur={onBlur}
            onFocus={onFocus}
            onSelect={onSelect}
            readOnly={readonly}
            {...props}
          />
          {isCaretVisible && (
            <span
              style={{ left: `${caretPosition * 6}px` }}
              className={cls.caret}
            ></span>
          )}
        </div>
      </div>
    );
  },
);
