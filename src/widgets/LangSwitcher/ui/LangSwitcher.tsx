import {classNames} from "shared/lib/classNames";
import {FC} from "react";
import cls from "./LangSwitcher.module.scss"
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}>
                {t("language")}
        </Button>
    );
};