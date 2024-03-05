import {classNames} from "shared/lib/classNames";
import {FC} from "react";
import cls from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...props
}) => {
    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...props}
        >
            {children}
        </Link>
    );
};