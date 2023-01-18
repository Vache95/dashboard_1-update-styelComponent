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
  const [activeId, setActiveId] = useState<string | undefined>("0");
  function toggleActive(id: any): void {
    if (activeId === id) {
      setActiveId(undefined);
    } else {
      setActiveId(id);
    }
  }
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
        <Accordion onClick={() => toggleActive("0")} style={activeId !== "0" ? { background: "#3b505f" } : undefined}>
          <AccordionSummary expandIcon=">" aria-controls="panel1a-content" id="panel1a-header">
            <Typography>todos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <NavLink to="todo">todo</NavLink>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon=">" aria-controls="panel1a-content" id="panel1a-header">
            <Typography>libs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  <NavLink to="dnd">DND</NavLink>
                </li>
                <li>
                  <NavLink to="soket">Soket</NavLink>
                </li>
                <li>
                  <NavLink to="map">Map</NavLink>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
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
