import { FC } from "react";
import "./header.scss";

const Header: FC<{ theme: string }> = ({ theme }) => {
  const burgerName: any = localStorage.getItem("burger");
  return (
    <div className={theme === "dark" ? `dark 	${burgerName}` : burgerName}>
      <div className="headeranim__top">
        <h1>Dashboard</h1>
      </div>
      <div className="headeranim__content">
      
      </div>
      <div className="headeranim__bottom">
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Header;
