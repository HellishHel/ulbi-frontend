import { classNames } from "shared/lib/classNames";
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
  "onChange" | "value"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autoFocus,
    ...props
  }) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);

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

    return (
      <div className={classNames(cls.container, {}, [className])}>
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
            {...props}
          />
          {isFocused && (
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
