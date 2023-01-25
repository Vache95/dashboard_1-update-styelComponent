import { FC } from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import i18next from "i18next";
import { headerMainProps } from "../../@types/headerMain";
import * as S from "./headeranim";

const HeaderMain: FC<headerMainProps> = ({ setHeaderToggle, headerToggle, theme, toggleTheme }) => {
  const burger = (): void => {
    setHeaderToggle(!headerToggle);
    if (headerToggle) {
      localStorage.setItem("burger", "headeranim");
    } else {
      localStorage.setItem("burger", "header");
    }
  };

  const colorHelpers = (): string => (theme === "dark" ? "#0080fa" : "#000");
  const colorIconHelpers = (): string => (theme === "dark" ? "#f1f1f1" : "#000");
  const colorMainHelpers = (): string => (theme === "dark" ? "#051b2e" : "#f4f6f8");

  return (
    <S.HeaderMain color={colorMainHelpers()}>
      <S.Burger onClick={burger}>
        <S.BurgerLine color={colorHelpers()} />
        <S.BurgerLine color={colorHelpers()} />
        <S.BurgerLine color={colorHelpers()} />
      </S.Burger>
      <S.HeaderRigth>
        <S.En color={colorHelpers()} onClick={() => i18next.changeLanguage("en")}>
          EN{" "}
        </S.En>{" "}
        <S.LangLine color={colorHelpers()} />
        <S.Ru color={colorHelpers()} onClick={() => i18next.changeLanguage("ru")}>
          {" "}
          RU
        </S.Ru>
        <S.HeaderMianTheme color={colorIconHelpers()} onClick={toggleTheme}>
          {theme !== "dark" ? <Brightness7Icon /> : <Brightness3Icon />}
        </S.HeaderMianTheme>
      </S.HeaderRigth>
    </S.HeaderMain>
  );
};

export default HeaderMain;
