import { FC } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: FC = () => {
  const error: any = useRouteError();
  return <div>
    <h1>ErrorPage{error.status}</h1>
    <h2>ErrorPage{error.statusText || 'not text'}</h2>
  </div>;
};

export default ErrorPage;
