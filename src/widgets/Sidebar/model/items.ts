import { SVGProps, VFC } from "react";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export type SidebarItemType = {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
};

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: "Main",
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: "About",
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "Profile",
  },
];
