import { createContext,useContext, useReducer } from "react";
export const DataContext = createContext();

export const DataContextProvider = ({ initialState, reducer, children }) => {
  return (
    <>
      <DataContext.Provider value={useReducer(reducer, initialState )}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export const useStateValue = () => useContext(DataContext);