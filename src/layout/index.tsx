import Header from "components/header";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderMain from "components/headerMain";
import useTheme from "hook/useTheme";

const HeaderLayout: FC = () => {
  const [headerToggle, setHeaderToggle] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="wrapper">
      <Header theme={theme} />
      <main className="main">
        <HeaderMain setHeaderToggle={setHeaderToggle} headerToggle={headerToggle} theme={theme} toggleTheme={toggleTheme} />
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderLayout;
