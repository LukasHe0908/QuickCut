'use client';
import React from 'react';
import { Listbox, ListboxItem } from '@nextui-org/react';

export default function App() {
  return (
    <>
      <ListboxWrapper>
        <Listbox aria-label='Actions' onAction={key => alert(key)}>
          <ListboxItem key='new'>New file</ListboxItem>
          <ListboxItem key='copy'>Copy link</ListboxItem>
          <ListboxItem key='edit'>Edit file</ListboxItem>
          <ListboxItem key='delete' className='text-danger' color='danger'>
            Delete file
          </ListboxItem>
        </Listbox>
      </ListboxWrapper>
    </>
  );
}
function ListboxWrapper({ children }) {
  return (
    <div className='w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100'>{children}</div>
  );
}
