import styled from "styled-components";

export const HeaderAnim = styled.div`
  ${(props: { headeranim: string; color: string }) =>
    props.headeranim === "headeranim"
      ? `
  background-color: ${props.color};
  width: 300px;
  margin-left: none;
  border-right: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  `
      : `
  background-color: #f4f6f8;
  width: 300px;
  margin-left: -300px;
  border-right: 2px solid #f1f1f1;
  `}
`;

export const HeaderAnimTop = styled.div`
  width: 100%;
  min-height: 50px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderAnimTitle = styled.h1`
  font-size: 30px;
  color: ${(props: { color?: string }) => props.color};
`;

export const HeaderAnimContent = styled.div`
  overflow-y: auto;
  flex: 1 1 100%;
  padding: 0px 20px;

  & > .MuiPaper-root {
    background: none;
    color: ${({ color }) => color};
    box-shadow: none;
    .MuiAccordionSummary-expandIconWrapper {
      color: ${({ color }) => color};
    }
    .MuiAccordionDetails-root {
      .MuiTypography-root {
        display: flex;
        flex-direction: column;
        a {
          color: ${({ color }) => color};
        }
      }
    }
  }
  & > .MuiPaper-root::before {
    background-color: transparent !important;
  }
`;
export const List = styled.ul`
  margin-top: 20px;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const ListItem = styled.li`
  a {
    color: ${({ color }) => color};
  }
`;

export const HeaderAnimBottom = styled.div`
  width: 100%;
  min-height: 50px;
  border-top: 2px solid #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderAnimLogout = styled.span`
  font-size: 20px;
  cursor: pointer;
  color: ${({ color }) => color};
`;
