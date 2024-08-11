'use client';
import React from 'react';
import { Tabs, Tab, Card, CardBody, Button, Textarea, input, Input, Checkbox } from '@nextui-org/react';
import SelectList from './components/selectList';

export default function App() {
  return (
    <>
      <div className='flex w-full flex-col'>
        <Tabs aria-label='Options' variant='underlined'>
          <Tab key='ffmpeg' title='FFmpeg'>
            <Card>
              <CardBody className='gap-4'>
                <div className='flex gap-5'>
                  {/* Left Panel */}
                  <div className='flex flex-col gap-2 w-full'>
                    {/* Input */}
                    <div className='border-small px-1 py-2 rounded-small border-default-200 flex flex-col gap-2'>
                      {/* Path */}
                      <div className='flex gap-1 items-center'>
                        <span className='whitespace-nowrap'>输入1路径：</span>
                        <Input size='sm' placeholder='这里输入要处理的视频、音频文件' />
                        <Button size='sm'>选择文件</Button>
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
                    <div className='border-small px-1 py-2 rounded-small border-default-200 flex flex-col gap-2'>
                      {/* Path */}
                      <div className='flex gap-1 items-center'>
                        <span className='whitespace-nowrap'>输入2路径：</span>
                        <Input size='sm' placeholder='这里输入要处理的视频、音频文件' />
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
                    <div className='border-small px-1 py-2 rounded-small border-default-200'>
                      {/* Path */}
                      <div className='flex gap-1 items-center'>
                        <span className='whitespace-nowrap'>输出：</span>
                        <Input size='sm' placeholder='文件名是什么后缀就会输出什么格式' />
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
                    <SelectList></SelectList>
                    <div className='flex flex-col gap-2'>
                      <div className='flex gap-2'>
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
                      </div>
                      <Button>查看该预设帮助</Button>
                    </div>
                  </div>
                </div>
                <VideoConverter></VideoConverter>
              </CardBody>
            </Card>
          </Tab>
          <Tab key='settings' title='设置'>
            <Card>
              <CardBody>Settings...</CardBody>
            </Card>
          </Tab>
          <Tab key='about' title='关于'>
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

function VideoConverter() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      {/* Generated Command and Run */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        <Textarea className='w-full' placeholder='这里是自动生成的总命令' minRows={10} maxRows={10} />
        <Button>运行</Button>
      </div>
    </div>
  );
}
