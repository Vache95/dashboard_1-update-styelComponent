import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "store/selector";
import { authThunk, loginThunk } from "store/slices/auth/thunk";
import { useAppDispatch, useAppSelector } from "store/store";
import { emailPattern } from "utils/rules/validation";
import { FormProps, IFormInput } from "../../@types/loginRegister";
import * as S from "./form";
import * as Sui from "components/ui/form";


const Form: FC<FormProps> = ({ login, registers }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, user } = useAppSelector(selectAuth);
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (registers) {
      dispatch(authThunk({ ...data, languageID: "1" }));
      user && navigate("/signin");
    } else {
      dispatch(loginThunk({ ...data, languageID: "1" }))
        .unwrap()
        .then((res) => {
          navigate("/");
        });
    }
  };

  const navigateRegister = (): void => {
    navigate("/signup");
  };

  return (
    <S.FormStyle onSubmit={handleSubmit(onSubmit)}>
      <S.titleStyle>{login ? "Login" : "Register"}</S.titleStyle>
      {(registers || login) && (
        <S.FormEmail>
          <Sui.Inputs type="email" placeholder="email" {...register("email", { required: true, pattern: emailPattern })} />
        </S.FormEmail>
      )}
      {login && (
        <S.FormPassword>
          <Sui.Inputs type="password" placeholder="password" {...register("code", { required: true })} />
        </S.FormPassword>
      )}
      <S.FormButton>
        <Button variant="text" type="submit">
          {loading ? <CircularProgress size={20} /> : login && !loading ? "Login" : "Register"}
        </Button>
        {login && (
          <Button variant="text" color="success" onClick={navigateRegister} type="button">
            Register
          </Button>
        )}
      </S.FormButton>
    </S.FormStyle>
  );
};

export default Form;
