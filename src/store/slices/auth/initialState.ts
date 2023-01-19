type AuthState = {
  user: string | [];
  token: string;
  refreshToken: string;
  loading: boolean;
  error: string;
};

export const initialState: AuthState = {
  user: [],
  token: "",
  refreshToken: "",
  loading: false,
  error: "",
};
