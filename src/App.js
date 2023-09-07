/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
'use server'
// import { Suspense, createElement, useContext, createServerContext } from 'react';
// import React from 'react';
import { AppContextProvider } from './AppContext';
import TmpServer from './TmpServer';

// import Note from './Note';
// import NoteList from './NoteList';
// import EditButton from './EditButton';
// import SearchField from './SearchField';
// import NoteSkeleton from './NoteSkeleton';
// import NoteListSkeleton from './NoteListSkeleton';
// import TmpClient from './tmoClient';
// import {AppContextProvider} from '../AppContext';
// import React,{useContext, useState, createContext} from 'react'

// export default function App({selectedId, isEditing, searchText, children}) {
export default function App(children) {

  return (
    <div>
      {children}
      <AppContextProvider value={{ name: 'lzx', age: 24 }}>
        <TmpServer />
      </AppContextProvider>
    </div>
    // <div className="main">
    //   <section className="col sidebar">
    //     <section className="sidebar-header">
    //       <img
    //         className="logo"
    //         src="logo.svg"
    //         width="22px"
    //         height="20px"
    //         alt=""
    //         role="presentation"
    //       />
    //       <strong>React Notes</strong>   a
    //     </section>
    //     <section className="sidebar-menu" role="menubar">
    //       <SearchField />
    //       <EditButton noteId={null} fn={Tests}>New</EditButton>
    //     </section>
    //     <nav>
    //       <Suspense fallback={<NoteListSkeleton />}>
    //         <NoteList searchText={searchText} />
    //       </Suspense>
    //     </nav>
    //   </section>
    //   <section key={selectedId} className="col note-viewer">
    //     <Suspense fallback={<NoteSkeleton isEditing={isEditing} />}>
    //       <Note selectedId={selectedId} isEditing={isEditing} />
    //     </Suspense>
    //   </section>
    // </div>
  );
}


const MyComponent = () => {
  // Use the useContext hook to access the context value
  const contextValue = useContext(Context);

  return (
    <div>
      <span>Context Value: {JSON.stringify(contextValue)}</span>
    </div>
  );
};