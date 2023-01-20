import { RootState } from "./../store";

export const selectTodo = ({ ui }: RootState) => ui;
export const selectAuth = ({ auth }: RootState) => auth;
