import PrivateRoute from "hoc";
import HeaderLayout from "layout";
import ErrorPage from "page/error";
import Todo from "page/home/todo";
import Signin from "page/signin";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  useEffect(() => {
    localStorage.setItem("token", "123qqq");
  }, []);
  return (
    <Routes>
      <Route path="" element={<PrivateRoute />}>
        <Route path="" element={<HeaderLayout />}>
          <Route index element={<Todo />} />
        </Route>
      </Route>
      <Route path="signin" element={<Signin />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
