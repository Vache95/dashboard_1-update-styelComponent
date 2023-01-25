import styled from "styled-components";

export const Inputs: any = styled.input.attrs(({ type, placeholder }) => ({
  type: type,
  placeholder: placeholder,
}))`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
