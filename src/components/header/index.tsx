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
      <div className="headeranim__top">
        <h1>{t("description")}</h1>
      </div>
      <div className="headeranim__content"></div>
      <div className="headeranim__bottom">
        <span className="headeranim__logout" onClick={logout}>
          {t("logout")}
        </span>
      </div>
    </div>
  );
};

export default Header;
