import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(
  ({ item: { Icon, text, path }, collapsed }) => {
    const { t } = useTranslation();

    return (
      <AppLink
        className={classNames(
          cls.SidebarItem,
          { [cls.collapsed]: collapsed },
          [],
        )}
        to={path}
      >
        <Icon className={cls.icon} />
        <span className={cls.link}>{t(text)}</span>
      </AppLink>
    );
  },
);
