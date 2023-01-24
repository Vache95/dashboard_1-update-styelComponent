import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const StyleLink = styled(Link)`
  color: red;
`;

export const FormContainer = styled.div`
  padding: 100px;
`;

const animation = keyframes`
0%{
    transform:rotateZ(0deg)
}
100%{
    transform:rotateZ(360deg)
}
`;

export const ButtonAnimation = styled.button.attrs({
  type: "button",
})`
  width: 200px;
  height: 30px;
  border: 1px solid black;
  background: gray;
  color: ${(props) => props.theme.colors.whitcustom};
  &:hover {
    animation: ${animation} 1s infinite linear;
  }
`;
