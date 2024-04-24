import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t: tBase } = useTranslation();
  const { t: tProfile } = useTranslation("profile");
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={tBase("Profile")} />
        <Button theme={ButtonTheme.OUTLINE}>{tBase("edit")}</Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.first} placeholder={tProfile("name")} />
        <Input value={data?.lastname} placeholder={tProfile("lastname")} />
      </div>
    </div>
  );
};
