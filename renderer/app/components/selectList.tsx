import { useMemo, useState } from 'react';
import { Listbox, ListboxItem } from '@nextui-org/react';
import ScrollBar from './scroll';
export default function SelectList() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['']));

  const selectedValue = useMemo(() => Array.from(selectedKeys).join(', '), [selectedKeys]);

  return (
    <ScrollBar className='w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 h-[15em]'>
      <Listbox
        variant='flat'
        selectionMode='single'
        selectedKeys={selectedKeys}
        onSelectionChange={keys => {
          setSelectedKeys(keys as any);
        }}
      >
        <ListboxItem key='none' className='*:!whitespace-normal'>
          不使用预设
        </ListboxItem>
        <ListboxItem key='h264'>H264压制</ListboxItem>
        <ListboxItem key='h264-intel'>H264压制 Intel 硬件加速</ListboxItem>
        <ListboxItem key='h264-amd'>H264压制 AMD 硬件加速</ListboxItem>
        <ListboxItem key='h264-nvidia'>H264压制 Nvidia 硬件加速</ListboxItem>
        <ListboxItem key='h264-mac'>H264压制 Mac 硬件加速</ListboxItem>
        <ListboxItem key='h265'>H265压制</ListboxItem>
        <ListboxItem key='h265-intel'>H265压制 Intel 硬件加速</ListboxItem>
        <ListboxItem key='h265-amd'>H265压制 AMD 硬件加速</ListboxItem>
        <ListboxItem key='h265-nvidia'>H265压制 Nvidia 硬件加速</ListboxItem>
        <ListboxItem key='h265-mac'>H265压制 Mac 硬件加速</ListboxItem>
        <ListboxItem key='number'>Number</ListboxItem>
        <ListboxItem key='date'>Date</ListboxItem>
        <ListboxItem key='single_date'>Single Date</ListboxItem>
        <ListboxItem key='iteration'>Iteration</ListboxItem>
      </Listbox>
    </ScrollBar>
  );
}
