import styled from "styled-components";

export const Todo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 52px;
  line-height: 39px;
  color: ${({ color }) => color};
`;
