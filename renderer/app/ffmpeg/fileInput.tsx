import { useState, useRef, useEffect } from 'react';
import { Button, Textarea, Input, Checkbox } from '@nextui-org/react';
import BorderWrapper from '../components/borderWrapper';

export default function FileInput({ path, setPath, inputNumber = '' }: { path; setPath; inputNumber?: string }) {
  return (
    <BorderWrapper className='flex flex-col gap-1'>
      {/* Path */}
      <div className='flex gap-1 items-center'>
        <span className='whitespace-nowrap'>输入{inputNumber}路径：</span>
        <FilePathSelector path={path} setPath={setPath} inputPlaceholder={'输入要处理的文件'}></FilePathSelector>
      </div>
      {/* Option */}
      <div className='flex flex-col gap-1'>
        <div className='flex gap-1 items-center'>
          <span className='whitespace-nowrap'>输入{inputNumber}选项：</span>
          <Input size='sm' placeholder='' />
        </div>
        <CheckedDisplay checkName={'截取片段'}>
          <div className='flex items-center'>
            <span className='whitespace-nowrap'>起始时间：</span>
            <Input size='sm' placeholder='' variant='underlined' />
          </div>
          <div className='flex items-center'>
            <span className='whitespace-nowrap'>截取时长：</span>
            <Input size='sm' placeholder='' variant='underlined' />
          </div>
        </CheckedDisplay>
      </div>
    </BorderWrapper>
  );
}

export function FilePathSelector({
  path,
  setPath,
  inputPlaceholder = '',
  selectorText = '选择文件',
  directory = false,
  multiple = false,
}: {
  path;
  setPath;
  inputPlaceholder?: string;
  selectorText?: string;
  directory?: boolean;
  multiple?: boolean;
}) {
  const inputComponent = useRef();
  return (
    <>
      <Input
        size='sm'
        placeholder={inputPlaceholder}
        onDragOver={ev => ev.preventDefault()}
        onDrop={ev => {
          ev.preventDefault();
          let file = ev.dataTransfer.items[0]?.getAsFile();
          if (file) {
            setPath(file.path ?? file.name ?? '');
            setTimeout(() => {
              let component = inputComponent.current as HTMLInputElement;
              let width = component.scrollWidth;
              component.scrollTo({ left: width, behavior: 'smooth' });
            }, 10);
          }
        }}
        value={path}
        onValueChange={value => {
          setPath(value);
        }}
        ref={inputComponent}
      />
      <Button
        size='sm'
        draggable={true}
        onClick={async () => {
          if (window.ipc) {
            let adds = [];
            directory && adds.join('openDirectory');
            multiple && adds.join('multiSelections');
            let filePath = await showOpenDialogSync({ properties: ['openFile', ...adds] });
            if (filePath) setPath(filePath[0]);
          } else {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.webkitdirectory = directory;
            if (multiple) fileInput.multiple = true;
            fileInput.onchange = (event: any) => {
              const file = event.target.files[0];
              if (file) {
                setPath(file.path ?? file.name ?? '');
              }
            };
            fileInput.click();
          }
          setTimeout(() => {
            let component = inputComponent.current as HTMLInputElement;
            let width = component.scrollWidth;
            component.scrollTo({ left: width, behavior: 'smooth' });
          }, 10);
        }}
      >
        {selectorText}
      </Button>
    </>
  );
}

export async function showOpenDialogSync(options: Electron.OpenDialogSyncOptions, timeout: number = 0) {
  return new Promise((resolve, reject) => {
    try {
      let signal = crypto.randomUUID();
      window.ipc.send('showOpenDialog', signal, options);
      let timer =
        timeout <= 0
          ? null
          : setTimeout(() => {
              reject(`timeout (${timeout} ms)`);
            }, timeout);
      window.ipc.once('showOpenDialog/' + signal, data => {
        clearTimeout(timer);
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function CheckedDisplay({
  checkName,
  children,
  classNames,
  occupyChildren = true,
}: {
  checkName;
  children;
  classNames?: { wrapper?; base? };
  occupyChildren?: boolean;
}) {
  const [intercept, setIntercept] = useState(false);

  return (
    <div className={'flex gap-4 items-center ' + classNames?.wrapper}>
      <Checkbox
        className='whitespace-nowrap'
        checked={intercept}
        onValueChange={value => {
          setIntercept(value);
        }}
      >
        {checkName}
      </Checkbox>
      <div
        className={
          'flex gap-2 transition-opacity duration-200 ' +
          (intercept ? '' : (occupyChildren ? 'invisible opacity-0' : 'hidden') + ' ') +
          classNames?.base
        }
      >
        {children}
      </div>
    </div>
  );
}
