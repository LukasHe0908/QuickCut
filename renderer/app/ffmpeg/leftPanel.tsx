import { useState } from 'react';
import { Button, Textarea, Input, Checkbox } from '@nextui-org/react';
import FileInput, { CheckedDisplay, FilePathSelector } from './fileInput';
import BorderWrapper from '../components/borderWrapper';

export default function RightPanel() {
  const [file1_path, setfile1_path] = useState('');
  const [file2_path, setfile2_path] = useState('');
  const [fileout_path, setfileout_path] = useState('');
  return (
    <div className='flex flex-col gap-2 w-full'>
      <FileInput path={file1_path} setPath={setfile1_path} inputNumber='1'></FileInput>
      <FileInput path={file2_path} setPath={setfile2_path} inputNumber='2'></FileInput>
      {/* Output */}
      <BorderWrapper className='flex flex-col gap-1'>
        {/* Path */}
        <div className='flex gap-1 items-center'>
          <span className='whitespace-nowrap'>输出：</span>
          <FilePathSelector
            path={fileout_path}
            setPath={setfileout_path}
            inputPlaceholder={'输出路径（后缀名确定格式）'}
            selectorText={'选择保存位置'}
            directory={true}
          ></FilePathSelector>
        </div>
        {/* Option */}
        <CheckedDisplay checkName={'新分辨率'}>
          <div className='flex items-center'>
            <Input size='sm' placeholder='' variant='underlined' />
            <span>x</span>
            <Input size='sm' placeholder='' variant='underlined' />
          </div>
          <Button size='sm'>分辨率预设</Button>
        </CheckedDisplay>
      </BorderWrapper>
      {/* Output Options */}
      <div className='flex items-center'>
        <text className='w-fit whitespace-nowrap'>输出选项：</text>
        <Textarea className='w-full' defaultValue={'-c copy'} minRows={6} maxRows={6} classNames={{ input: '' }} />
      </div>
    </div>
  );
}
