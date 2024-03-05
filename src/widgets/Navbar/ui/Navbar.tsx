import {classNames} from "shared/lib/classNames";
import {FC} from "react";
import cls from "./Navbar.module.scss"
import {AppLink} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={"/"}>Главная</AppLink>
                <AppLink to={"/about"}>О сайте</AppLink>
            </div>
        </div>
    );
};