import { REGISTER } from "url/signupUrl";
import AxiosInstance from "utils/Instance";

export const registerPost = (data: any) => AxiosInstance.post(REGISTER, data);
