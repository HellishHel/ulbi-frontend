import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";
// import { Counter } from "entities/Counter";
import { Input } from "shared/ui/Input/Input";

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>("");

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {/*<BugButton />*/}
      {t("Main")}
      {/*<Counter />*/}
      <Input placeholder="Введите значение" value={value} onChange={onChange} />
    </div>
  );
};

export default MainPage;
