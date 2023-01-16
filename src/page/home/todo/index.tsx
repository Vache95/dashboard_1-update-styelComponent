import { FC } from "react";
import { useTranslation } from "react-i18next";
import "./todo.scss";

const Todo: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="todo">
      <h1>{t('mainWords.hello')}</h1>
    </div>
  );
};

export default Todo;
