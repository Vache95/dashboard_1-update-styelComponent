import { FC } from "react";
import * as S from "./formStyle";

const FormPage: FC = () => {
  return (
    <S.FormContainer>
      <S.ButtonAnimation type='button' >Button</S.ButtonAnimation>
      <S.StyleLink to='asd'>asdas</S.StyleLink>
    </S.FormContainer>
  );
};

export default FormPage;
