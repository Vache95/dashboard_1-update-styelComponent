import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./loginsignup.scss";

const LoginSignupLayout: FC = () => {
  return (
    <div className="signin">
      <div className="signin__container">
        <div className="signin__left"></div>
        <div className="signin__rigth">
          <div className="signin__rigth-contents">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupLayout;
