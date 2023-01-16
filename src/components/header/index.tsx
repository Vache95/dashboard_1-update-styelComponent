import { FC } from "react";
import "./header.scss";

const Header: FC<{ theme: string }> = ({ theme }) => {
  const burgerName: any = localStorage.getItem("burger");
  return (
    <div className={theme === "dark" ? `dark 	${burgerName}` : burgerName}>
      <div className="headeranim__top"></div>
      <div className="headeranim__content"></div>
      <div className="headeranim__bottom"></div>
    </div>
  );
};

export default Header;
