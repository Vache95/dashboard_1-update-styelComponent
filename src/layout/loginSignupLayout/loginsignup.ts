import styled from "styled-components";
import { Container } from "components/ui/container";
export const Signin = styled.div`
  max-width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SigninContainer = styled(Container)`
  width: 100%;
  height: 800px;
  border-radius: 30px;
  display: flex;
  padding: 0px !important;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const SigninLeft = styled.div`
  flex: 1 1 50%;
  border-radius: 30px;
  background-color: #f4f6f8;
`;

export const SigninRigth = styled.div`
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SigninRigthContent = styled.div`
  width: 400px;
  height: 300px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 20px;
  padding: 20px;
`;
