import { FC } from "react";
import { useTranslation } from "react-i18next";
import { selectTodo } from "store/selector";
import { useAppSelector } from "store/store";
import "./todo.scss";

const Todo: FC = () => {
  const { t } = useTranslation();
  const ui = useAppSelector(selectTodo);

  return (
    <div className={ui?.theme === "darkTodo" ? "todo darkTodo" : "todo"}>
      <h1>{t("learn")}</h1>
    </div>
  );
};

export default Todo;
