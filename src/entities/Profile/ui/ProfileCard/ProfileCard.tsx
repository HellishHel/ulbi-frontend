import { classNames, Mods } from "shared/lib/classNames/classNames";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "entities/Profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "shared/const/common";

import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeLastname,
  onChangeFirstname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
}) => {
  const { t: tBase } = useTranslation();
  const { t: tProfile } = useTranslation("profile");

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          align="center"
          theme={TextTheme.ERROR}
          title={tBase("baseErrorText")}
          text={error}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data.avatar} />
          </div>
        )}
        <Input
          value={data?.first}
          onChange={onChangeFirstname}
          placeholder={tProfile("name")}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          onChange={onChangeLastname}
          placeholder={tProfile("lastname")}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          onChange={onChangeAge}
          placeholder={tProfile("age")}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          onChange={onChangeCity}
          placeholder={tProfile("city")}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          onChange={onChangeUsername}
          placeholder={tProfile("username")}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          onChange={onChangeAvatar}
          placeholder={tProfile("avatar")}
          readonly={readonly}
        />
        <Select
          label={tBase("currency")}
          options={Object.values(Currency).map((value) => ({
            content: value,
            value,
          }))}
        />
      </div>
    </div>
  );
};
