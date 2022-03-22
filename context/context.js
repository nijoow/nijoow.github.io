// import React from "react";

// const PortfolioContext = React.createContext();

// export const PortfolioProvider = PortfolioContext.Provider;
// export const PortfolioConsumer = PortfolioContext.Consumer;
// console.log(PortfolioContext);
// export default PortfolioContext;
import { prefix } from "../config/config";
import { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { currentTheme, recentlyPlayed } = state;
  const systemPrefers = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });
  useEffect(() => {
    const osTheme = systemPrefers ? "dark" : "light";
    const userTheme = localStorage.getItem("color-theme");
    const theme = userTheme || osTheme;
    dispatch({ type: "setTheme", value: theme });
  }, [systemPrefers]);

  return (
    <UserContext.Provider
      value={{
        dispatch,
        prefix,
        currentTheme,
        recentlyPlayed,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
