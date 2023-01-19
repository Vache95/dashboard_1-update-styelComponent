import PrivateRoute from "hoc/private";
import PublicRoute from "hoc/public";
import HeaderLayout from "layout";
import LoginSignupLayout from "layout/loginSignupLayout/indext";
import ErrorPage from "page/error";
import Chat from "page/home/chat";
import Diagram from "page/home/diagram";
import Dnd from "page/home/dnd";
import FormPage from "page/home/form";
import Game from "page/home/game";
import GraphQl from "page/home/graphql";
import Jss from "page/home/jss";
import MapComponent from "page/home/map";
import MaterialUi from "page/home/materialUi";
import Profile from "page/home/profile";
import Soket from "page/home/soket";
import StyleComponent from "page/home/styleComponent";
import Todo from "page/home/todo";
import Signin from "page/signin";
import SignUp from "page/signup";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="" element={<PrivateRoute />}>
        <Route path="" element={<HeaderLayout />}>
          <Route path="todo" element={<Todo />} />
          <Route path="dnd" element={<Dnd />} />
          <Route path="soket" element={<Soket />} />
          <Route path="diagram" element={<Diagram />} />
          <Route path="map" element={<MapComponent />} />
          <Route path="form" element={<FormPage />} />
          <Route path="chat" element={<Chat />} />
          <Route path="grafhql" element={<GraphQl />} />
          <Route path="jss" element={<Jss />} />
          <Route path="materialui" element={<MaterialUi />} />
          <Route path="stylecomponent" element={<StyleComponent />} />
          <Route path="game" element={<Game />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
      <Route path="" element={<PublicRoute />}>
        <Route path="" element={<LoginSignupLayout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
