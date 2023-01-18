import { FC } from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import "./headermain.scss";
import { NavLink } from "react-router-dom";
import i18next from "i18next";
import { headerMainProps } from "../../@types/headerMain";

const HeaderMain: FC<headerMainProps> = ({ setHeaderToggle, headerToggle, theme, toggleTheme }) => {
  
  const burger = (): void => {
    setHeaderToggle(!headerToggle);
    if (headerToggle) {
      localStorage.setItem("burger", "headeranim");
    } else {
      localStorage.setItem("burger", "header");
    }
  };

  return (
    <div className={theme === "dark" ? "headermain dark" : "headermain"}>
      <div className="headermain__burger" onClick={burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="header__content">
        {/* <ul>
          <li>
            <NavLink to="dnd" className={({ isActive }) => (isActive ? "li__active " : undefined)}>
              DND
            </NavLink>
          </li>
          <li>
            <NavLink to="soket" className={({ isActive }) => (isActive ? "li__active " : undefined)}>
              Soket
            </NavLink>
          </li>
          <li>
            <NavLink to="map" className={({ isActive }) => (isActive ? "li__active " : undefined)}>
              Map
            </NavLink>
          </li>
        </ul> */}
      </div>
      <div className="header__rigth">
        <span className="en" onClick={() => i18next.changeLanguage("en")}>
          EN{" "}
        </span>{" "}
        <span className="lang-line"/>
        <span className="ru" onClick={() => i18next.changeLanguage("ru")}>
          {" "}
          RU
        </span>
        <div className={theme !== "dark" ? "headermain__theme" : "headermain__theme them-icon"} onClick={toggleTheme}>
          {theme !== "dark" ? <Brightness7Icon /> : <Brightness3Icon />}
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
