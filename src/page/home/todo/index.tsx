import { FC } from "react";
import { useTranslation } from "react-i18next";
import { selectTodo } from "store/selector";
import { useAppSelector } from "store/store";
import * as S from "./todo";

const Todo: FC = () => {
  const { t } = useTranslation();
  const ui = useAppSelector(selectTodo);
  const todoHelper = (): string => (ui?.theme === "darkTodo" ? "#001e3b" : "#fff");
  const todoHelperH1 = (): string => (ui?.theme === "darkTodo" ? "#56b2fb" : "#000");

  return (
    <S.Todo color={todoHelper()}>
      <S.Title color={todoHelperH1()}>{t("learn")}</S.Title>
    </S.Todo>
  );
};

export default Todo;
