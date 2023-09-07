import * as React from 'react';
// import React, {createContext} from "react";

// const Context = createContext();
const Context = React.createServerContext();

Context.displayName = 'AppContext';

function useAppContext() {
  const value = React.useContext(Context);
  return value;
}

function useAppData() {
  const value = React.useContext(Context);
  return value.appData;
}

const AppContextProvider = Context.Provider;

export {
  useAppContext,
  useAppData,
  AppContextProvider,
};
