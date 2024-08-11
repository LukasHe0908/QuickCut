'use client';
import { useState } from 'react';
import { Tabs, Tab, Card, CardBody, Button, Textarea, input, Input, Checkbox } from '@nextui-org/react';
import SelectList from './components/selectList';
import ScrollBar from './components/scroll';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function App() {
  const [file1_path, setfile1_path] = useState('');
  const [file2_path, setfile2_path] = useState('');
  return (
    <>
      <div className='flex h-full w-full flex-col'>
        <Tabs aria-label='Options' variant='underlined'>
          <Tab key='ffmpeg' title='FFmpeg' className='h-full'>
            <Card>
              <CardBody className='gap-4'>
                <div className='flex gap-5'>
                  {/* Left Panel */}
                  <div className='flex flex-col gap-2 w-full'>
                    {/* Input */}
                    <div className='border-small p-1 rounded-small border-default-200 dark:border-default-100 flex flex-col gap-1'>
                      {/* Path */}
                      <div className='flex gap-1 items-center'>
                        <span className='whitespace-nowrap'>输入1路径：</span>
                        <Input
                          size='sm'
                          placeholder='输入要处理的文件'
                          onDragOver={ev => {
                            ev.preventDefault();
                          }}
                          onDrop={ev => {
                            ev.preventDefault();
                            let file = ev.dataTransfer.items[0].getAsFile();
                            setfile1_path(file.path ?? file.name);
                          }}
                          value={file1_path}
                          onValueChange={value => {
                            setfile1_path(value);
                          }}
                        />
                        <Button size='sm' draggable={true}>
                          选择文件
                        </Button>
                      </div>
                      {/* Option */}
                      <div>
                        <div className='flex gap-1 items-center'>
                          <span className='whitespace-nowrap'>输入1选项：</span>
                          <Input size='sm' placeholder='' />
                        </div>
                        <div className='flex gap-1 items-center'>
                          <Checkbox>截取片段</Checkbox>
                        </div>
                      </div>
                    </div>
                    {/* Input 2 */}
                    <div className='border-small p-1 rounded-small border-default-200 dark:border-default-100 flex flex-col gap-1'>
                      {/* Path */}
                      <div className='flex gap-1 items-center'>
                        <span className='whitespace-nowrap'>输入2路径：</span>
                        <Input
                          size='sm'
                          placeholder='输入要处理的文件'
                          onDragOver={ev => {
                            ev.preventDefault();
                          }}
                          onDrop={ev => {
                            ev.preventDefault();
                            let file = ev.dataTransfer.items[0].getAsFile();
                            setfile2_path(file.path ?? file.name);
                          }}
                          value={file2_path}
                          onValueChange={value => {
                            setfile2_path(value);
                          }}
                        />
                        <Button size='sm'>选择文件</Button>
                      </div>
                      {/* Option */}
                      <div>
                        <div className='flex gap-1 items-center'>
                          <span className='whitespace-nowrap'>输入2选项：</span>
                          <Input size='sm' placeholder='' />
                        </div>
                        <div className='flex gap-1 items-center'>
                          <Checkbox>截取片段</Checkbox>
                        </div>
                      </div>
                    </div>
                    {/* Output */}
                    <div className='border-small p-1 rounded-small border-default-200 dark:border-default-100 flex flex-col gap-1'>
                      {/* Path */}
                      <div className='flex gap-1 items-center'>
                        <span className='whitespace-nowrap'>输出：</span>
                        <Input size='sm' placeholder='输出路径（后缀名确定格式）' />
                        <Button size='sm'>选择保存位置</Button>
                      </div>
                      {/* Option */}
                      <div className='flex gap-1 items-center'>
                        <Checkbox>新分辨率</Checkbox>
                      </div>
                    </div>
                    {/* Output Options */}
                    <div className='flex items-center'>
                      <text className='w-fit whitespace-nowrap'>输出选项：</text>
                      <Textarea
                        className='w-full'
                        x-data={''}
                        defaultValue={'-c copy'}
                        minRows={6}
                        maxRows={6}
                        classNames={{ input: '' }}
                      />
                    </div>
                  </div>
                  {/* Right Panel */}
                  <div className='flex flex-col gap-2'>
                    <span className='pl-2'>选择预设：</span>
                    <SelectList classname={'min-w-[30vw]'}></SelectList>
                    <div className='flex flex-col gap-2'>
                      {/* <div className='flex gap-2'>
                        <Button size='sm' className='w-full'>
                          ↑
                        </Button>
                        <Button size='sm' className='w-full'>
                          ↓
                        </Button>
                      </div>
                      <div className='flex gap-2'>
                        <Button size='sm' className='w-full'>
                          +
                        </Button>
                        <Button size='sm' className='w-full'>
                          -
                        </Button>
                      </div> */}
                      <div className='flex gap-2'>
                        <Button size='sm' className='w-full'>
                          查看预设帮助
                        </Button>
                        <Button size='sm' className='gap-1'>
                          <ModeEditIcon className='!text-base'></ModeEditIcon>编辑
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                  {/* Generated Command and Run */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                    <Textarea className='w-full' placeholder='自动生成的总命令' minRows={10} maxRows={10} />
                    <Button>运行</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key='easy' title='Easy Mode' className='h-full'>
            <iframe src='https://ffmpeg-web.netlify.app/' className='h-full w-full'></iframe>
          </Tab>
          <Tab key='settings' title='设置' className='h-full'>
            <Card>
              <CardBody>Settings...</CardBody>
            </Card>
          </Tab>
          <Tab key='about' title='关于' className='h-full'>
            <Card>
              <CardBody>
                <h2 className='text-2xl font-bold'>开发中</h2>
                About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>
                About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>
                About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>
                About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>About...<br></br>
                About...<br></br>About...<br></br>About...<br></br>About...<br></br>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
