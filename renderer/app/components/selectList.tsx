import { useMemo, useState } from 'react';
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/react';
import ScrollBar from './scroll';

export default function SelectList({ classname }: { classname? }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['']));

  const selectedValue = useMemo(() => Array.from(selectedKeys).join(', '), [selectedKeys]);

  return (
    <ScrollBar className={'w-full border-small px-1 py-2 rounded-small border-default-200 h-[20em] ' + classname}>
      <Listbox
        variant='flat'
        selectionMode='single'
        selectedKeys={selectedKeys}
        onSelectionChange={keys => {
          setSelectedKeys(keys as any);
        }}
      >
        <ListboxItem key='none' className='*:!whitespace-normal' showDivider>
          不使用预设
        </ListboxItem>
        <ListboxSection title='编码' showDivider>
          <ListboxItem key='h264'>H264</ListboxItem>
          <ListboxItem key='h264-intel'>H264 Intel</ListboxItem>
          <ListboxItem key='h264-nvidia'>H264 Nvidia</ListboxItem>
          <ListboxItem key='h265'>H265</ListboxItem>
          <ListboxItem key='h265-intel'>H265 Intel</ListboxItem>
          <ListboxItem key='h265-nvidia'>H265 Nvidia</ListboxItem>
        </ListboxSection>

        <ListboxItem key='number'>Number</ListboxItem>
        <ListboxItem key='date'>Date</ListboxItem>
        <ListboxItem key='single_date'>Single Date</ListboxItem>
        <ListboxItem key='iteration'>Iteration</ListboxItem>
      </Listbox>
    </ScrollBar>
  );
}
