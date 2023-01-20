import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginPost } from "services/loginServices";
import { registerPost } from "services/registerServices";

type AuthType = {
  email: string;
  languageID: string | undefined;
};

type LoginType = {
  code: string;
} & AuthType;

export const authThunk = createAsyncThunk<any, AuthType>("authThunk", async (data) => {
  return registerPost(data)
    .then((res) => {
      return res.data as string;
    })
    .catch((e) => {
      return e;
    });
});

export const loginThunk = createAsyncThunk<any, LoginType>("authThunk", async (data) => {
  return loginPost(data)
    .then((res) => {
      localStorage.setItem("token", res?.data?.jwt?.token);
      localStorage.setItem("refreshtoken", res?.data?.jwt?.refreshToken);
      return res.data;
    })
    .catch((e) => {
      return e;
    });
});
