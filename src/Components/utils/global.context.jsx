import React, { createContext, useReducer, useMemo } from "react";

export const initialState = {
  theme: "light",
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAV":
      const updatedFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload.id);
      localStorage.setItem("favs", JSON.stringify(filteredFavs));
      return { ...state, favs: filteredFavs };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
