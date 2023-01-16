import { FC } from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import "./headermain.scss";

type headerMainProps = {
  setHeaderToggle: (arg: boolean) => any;
  headerToggle: boolean;
  theme: string;
  toggleTheme: () => void;
};

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
      <div className={theme !== "dark" ? "headermain__theme" : "headermain__theme them-icon"} onClick={toggleTheme}>
        {theme !== "dark" ? <Brightness7Icon /> : <Brightness3Icon />}
      </div>
    </div>
  );
};

export default HeaderMain;
