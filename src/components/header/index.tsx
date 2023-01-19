import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { FC, MouseEventHandler, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";

import "./header.scss";

const Header: FC<{ theme: string }> = ({ theme }) => {
  const burgerName: any = localStorage.getItem("burger");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logout = (): void => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  return (
    <div className={theme && theme === "dark" ? `dark 	${burgerName}` : burgerName}>
      <div className="headeranim__top">
        <h1>{t("description")}</h1>
      </div>
      <div className="headeranim__content">
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
        <ul>
          {/* <li>
            <NavLink to="dnd">DND</NavLink>
          </li> */}
          {/* <li>
            <NavLink to="soket">Soket</NavLink>
          </li> */}
          <li>
            <NavLink to="map">Map</NavLink>
          </li>
          <li>
            <NavLink to="diagram">Diagram</NavLink>
          </li>
          <li>
            <NavLink to="Form">Form</NavLink>
          </li>
          {/* <li>
            <NavLink to="chat">Chat</NavLink>
          </li> */}
          <li>
            <NavLink to="materialui">MaterialUi</NavLink>
          </li>
          <li>
            <NavLink to="grafhql">GrafhQl</NavLink>
          </li>
          {/* <li>
            <NavLink to="game">Game</NavLink>
          </li> */}
          {/* <li>
            <NavLink to="profile">Profile</NavLink>
          </li> */}
        </ul>
      </div>
      <div className="headeranim__bottom">
        <span className="headeranim__logout" onClick={logout}>
          {t("logout")}
        </span>
      </div>
    </div>
  );
};

export default Header;
