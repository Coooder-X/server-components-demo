// import * as React from 'react';

import React,{useContext, useState, createContext} from 'react'


const Context = createContext();

Context.displayName = 'AppContext';

function useAppContext() {
  const value = useContext(Context);
  return value;
}

function useAppData() {
  const value = useContext(Context);
  return value.appData;
}

const AppContextProvider = Context.Provider;

export {
  useAppContext,
  useAppData,
  AppContextProvider,
};
