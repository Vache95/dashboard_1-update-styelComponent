import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./todo.scss";

const Todo: FC = () => {
  const { t } = useTranslation();
  const ui: any = useSelector((state) => state);

  return (
    <div className={ui?.ui?.theme === "darkTodo" ? "todo darkTodo" : "todo"}>
      <h1>{t("learn")}</h1>
    </div>
  );
};

export default Todo;
