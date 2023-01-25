import styled from "styled-components";




export const HeaderMain = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ color }) => color};
  border-bottom: 2px solid ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;

export const Burger = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;
export const BurgerLine = styled.span`
  width: 100%;
  height: 4px;
  background-color: ${({ color }) => color};
`;
export const HeaderRigth = styled.div`
  display: flex;
  align-items: center;
`;
export const En = styled.span`
  padding-right: 3px;
  cursor: pointer;
  color: ${({ color }) => color};
`;

export const Ru = styled.span`
  padding-left: 3px;
  cursor: pointer;
  color: ${({ color }) => color};
`;
export const LangLine = styled.span`
  width: 2px;
  height: 15px;
  margin-top: 1px;
  background-color: ${({ color }) => color};
`;
export const HeaderMianTheme = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid ${({ color }) => color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  & > svg {
    color: ${({ color }) => color};
  }
`;
