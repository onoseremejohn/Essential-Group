import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import data from "./data";
import reducer from "./reducer";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const initialState = {
    isNavOpen: false,
    index: 5,
    data,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleNav = () => {
    dispatch({ type: "TOGGLE_NAV" });
  };
  const closeNav = () => {
    dispatch({ type: "CLOSE_NAV" });
  };

  useEffect(() => {
    let interval = setTimeout(() => dispatch({ type: "CHANGE" }), 7000);
    return () => clearTimeout(interval);
  }, [state.index]);

  useEffect(() => {
    if (state.index > data.length - 1) {
      dispatch({ type: "RESET" });
    }
  }, [state.index]);
  return (
    <AppContext.Provider value={{ ...state, toggleNav, closeNav }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
