import PrivateRoute from "hoc/private";
import PublicRoute from "hoc/public";
import HeaderLayout from "layout";
import ErrorPage from "page/error";
import Diagram from "page/home/diagram";
import Dnd from "page/home/dnd";
import MapComponent from "page/home/map";
import Soket from "page/home/soket";
import Todo from "page/home/todo";
import Signin from "page/signin";
import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const Router: FC = () => {
  useEffect(() => {
    localStorage.setItem("token", "123qqq");
  }, []);

  return (
    <Routes>
      <Route path="" element={<PrivateRoute />}>
        <Route path="" element={<HeaderLayout />}>
          <Route path="todo" element={<Todo />} />
          <Route path="dnd" element={<Dnd />} />
          <Route path="soket" element={<Soket />} />
          <Route path="diagram" element={<Diagram />} />
          <Route path="map" element={<MapComponent />} />
        </Route>
      </Route>
      <Route path="" element={<PublicRoute />}>
        <Route path="signin" element={<Signin />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
