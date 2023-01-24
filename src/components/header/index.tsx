import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { headerData } from "./data";
import * as S from "./headerStyle";

const Header: FC<{ theme: string }> = ({ theme }) => {
  const burgerName: any = localStorage.getItem("burger");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logout = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshtoken");
    navigate("/signin");
  };

  const themeHelpers = (): string => (theme === "dark" ? "#56b2fb" : "#000");
  const themeBgHelpers = (): string => (theme === "dark" ? "#051b2e" : "#f4f6f8");

  
  return (
    <S.HeaderAnim headeranim={burgerName} color={themeBgHelpers()}>
      <S.HeaderAnimTop>
        <S.HeaderAnimTitle color={themeHelpers()}>{t("description")}</S.HeaderAnimTitle>
      </S.HeaderAnimTop>
      <S.HeaderAnimContent color={themeHelpers()}>
        <Accordion>
          <AccordionSummary expandIcon=">" aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Todos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <NavLink to="todo">Todo</NavLink>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <S.List>
          {headerData.map(({ path, text }, index) => (
            <S.ListItem color={themeHelpers()} key={index}>
              <NavLink to={path}>{text}</NavLink>
            </S.ListItem>
          ))}
        </S.List>
      </S.HeaderAnimContent>

      <S.HeaderAnimBottom>
        <S.HeaderAnimLogout onClick={logout} color={themeHelpers()}>
          {t("logout")}
        </S.HeaderAnimLogout>
      </S.HeaderAnimBottom>
    </S.HeaderAnim>
  );
};

export default Header;
