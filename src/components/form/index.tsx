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
import "./form.scss";

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
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>{login ? "Login" : "Register"}</h3>
      {(registers || login) && (
        <div className="form__email">
          <input type="text" placeholder="email" {...register("email", { required: true, pattern: emailPattern })} />
        </div>
      )}
      {login && (
        <div className="form__password">
          <input type="password" placeholder="password" {...register("code", { required: true })} />
        </div>
      )}
      <div className="form__button">
        <Button variant="text" type="submit">
          {loading ? <CircularProgress size={20} /> : login && !loading ? "Login" : "Register"}
        </Button>
        {login && (
          <Button variant="text" color="success" onClick={navigateRegister} type="button">
            Register
          </Button>
        )}
      </div>
    </form>
  );
};

export default Form;
