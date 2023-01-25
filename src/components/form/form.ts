import styled from "styled-components";

export const FormStyle = styled.form`
  width: 100%;
  height: 100%;
`;

export const titleStyle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
`;

export const FormEmail = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const FormPassword = styled.div`
  width: 100%;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const FormButton = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 200px;
  height: 40px;
  margin: 20px auto;
  & > button {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    margin-bottom: 10px;
  }
`;
