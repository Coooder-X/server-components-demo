/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use client';

import {useEffect, useState, useTransition} from 'react';
import {useRouter} from './framework/router';

import Spinner from './Spinner';
import { useAppContext } from './AppContext';

export default function SearchField() {
  const [text, setText] = useState('');
  const [isSearching, startSearching] = useTransition();
  const {navigate} = useRouter();
  const value = useAppContext();
  console.log('useAppContext', useAppContext, useAppContext())

  const [obj, setObj] = useState(null);
  useEffect(() => {
    console.log('value', value)
    if(value)
      setObj(value)
  }, [value])
  console.log('client context', value)
  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <label className="offscreen" htmlFor="sidebar-search-input">
        Search for a note by title
      </label>
      <input
        id="sidebar-search-input"
        placeholder={obj? obj.name : ''}
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
          startSearching(() => {
            navigate({
              searchText: newText,
            });
          });
        }}
      />
      {obj && obj.name}
      <Spinner active={isSearching} />
    </form>
  );
}
