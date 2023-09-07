'use client'
import { Suspense, useContext } from 'react';
import React from 'react';

// import Note from './Note';
import NoteList from './NoteList';
import EditButton from './EditButton';
import SearchField from './SearchField';
// import NoteSkeleton from './NoteSkeleton';
import NoteListSkeleton from './NoteListSkeleton';
// import TmpServer from './TmpServer';
// import {useAppContext} from '../AppContext';

export default function TmpClient({ selectedId, isEditing, searchText, fn }) {

  // const appContext = React.useContext();
  return (
    <div className="main">
      <section className="col sidebar">
        <section className="sidebar-header">
          <img
            className="logo"
            src="logo.svg"
            width="22px"
            height="20px"
            alt=""
            role="presentation"
          />
          <strong>React Notes</strong>
        </section>
        <section className="sidebar-menu" role="menubar">
          <SearchField />
          <EditButton noteId={null} fn={fn}>New</EditButton>
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <NoteList searchText={searchText} />
          </Suspense>
        </nav>
      </section>
      {/* <section key={selectedId} className="col note-viewer">
        <Suspense fallback={<NoteSkeleton isEditing={isEditing} />}>
          <Note selectedId={selectedId} isEditing={isEditing} />
        </Suspense>
      </section> */}
      {/* <TmpServer /> */}
    </div>
  );
}
