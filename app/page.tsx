"use client";
import React, { useReducer } from "react";
import Gradientdiv from "./ClientComponents/Gradientdiv";
import Draken from "./mainPage/Draken";
type State = {
  count: string;
};

const initialState: State = { count: "pro" };
type Action =
  | { type: "exp"; payload: string }
  | { type: "pro"; payload: string }
  | { type: "abt"; payload: string };
type UserContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const UserContext = React.createContext<UserContextType>({
  state: initialState,
  dispatch: () => {},
});

export default function Home() {
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "exp":
        return { ...state, count: action.payload };
      case "pro":
        return { ...state, count: action.payload };
      case "abt":
        return { ...state, count: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Gradientdiv className="">
      <UserContext.Provider value={{ state, dispatch }}>
        <Draken />
      </UserContext.Provider>
    </Gradientdiv>
  );
}
