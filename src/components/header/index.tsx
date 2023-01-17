import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
      <div className={theme === "dark" ? "headeranim__top headeranim__top-dark " : "headeranim__top"}>
        <h1 className={theme === "dark" ? "h1__dark" : "h1_light"}>{t("description")}</h1>
      </div>
      <div className="headeranim__content"></div>
      <div className={theme === "dark" ? "headeranim__bottom headeranim__bottom-dark" : "headeranim__bottom"}>
        <span className={theme === "dark" ? "headeranim__logout headeranim__logout-dark" : "headeranim__logout"} onClick={logout}>
          {t("logout")}
        </span>
      </div>
    </div>
  );
};

export default Header;
