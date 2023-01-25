import { FC } from "react";
import { Outlet } from "react-router-dom";
import * as S from "./loginsignup";


const LoginSignupLayout: FC = () => {
  return (
    <S.Signin>
      <S.SigninContainer>
        <S.SigninLeft />
        <S.SigninRigth>
          <S.SigninRigthContent>
            <Outlet />
          </S.SigninRigthContent>
        </S.SigninRigth>
      </S.SigninContainer>
    </S.Signin>
  );
};

export default LoginSignupLayout;
