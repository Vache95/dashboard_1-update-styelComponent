import Header from "components/header";
import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderMain from "components/headerMain";
import useTheme from "hook/useTheme";
import { useAppDispatch } from "store/store";
import { changeTeme } from "store/slices/ui/uiSlice";

const HeaderLayout: FC = () => {
  const [headerToggle, setHeaderToggle] = useState<boolean>(false);
  const { theme, theme2, toggleTheme } = useTheme();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeTeme(theme2));
  }, [theme2, theme]);
  
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
