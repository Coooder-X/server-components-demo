'use server'
// import { Suspense, createElement, createServerContext } from 'react';
import {useAppContext} from './AppContext';
import React from 'react';
import EditButton from './EditButton';
import SearchField from './SearchField';

export default function TmpServer({ selectedId, isEditing, searchText, fn }) {

  // const value = useContext();
  const value = useAppContext();
  return (
    <div className="main">
      <section className="col sidebar">
        {JSON.stringify(value)}
        <section className="sidebar-menu" role="menubar">
          <SearchField />
          <EditButton noteId={null}>server</EditButton>
        </section>
      </section>
    </div>
  );
}
