import {classNames} from "shared/lib/classNames";
import {FC} from "react";
import cls from "./Navbar.module.scss"
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={"/"}>Главная</AppLink>
                <AppLink to={"/about"}>О сайте</AppLink>
            </div>
        </div>
    );
};