import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";

// import cls from "./ProfilePage.module.scss";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {/*<div className={classNames(cls.ProfilePage, {}, [className])}>*/}
      ProfilePage
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
