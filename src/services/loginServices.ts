import { LOGIN } from "url/siginUrl";
import AxiosInstance from "utils/Instance";

export const loginPost = (data: any) => AxiosInstance.post(LOGIN, data);
