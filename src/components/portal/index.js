import { useMemo } from "react";
import ReactDOM from "react-dom/client";

export const ModalPortal = ({ children }) => {
  const containerElement = useMemo(() => document.getElementById("portal"), []);
  return ReactDOM.createPortal(children, containerElement);
};
