'use client';
import { useState } from 'react';
import { Tabs, Tab, Card, CardBody, Button, Textarea, Input, Checkbox, Tooltip, Chip } from '@nextui-org/react';
import ScrollBar from './components/scroll';
import FFmpegPage from './ffmpeg/page';
import BorderWrapper from './components/borderWrapper';

export default function App() {
  return (
    <>
      <div className='flex h-full w-full flex-col'>
        <Tabs aria-label='Options' variant='underlined'>
          <Tab key='ffmpeg' title='FFmpeg' className='h-full'>
            <FFmpegPage></FFmpegPage>
          </Tab>
          <Tab key='easy' title='Easy Mode' className='h-full'>
            <iframe src='https://ffmpeg-web.netlify.app/' className='h-full w-full'></iframe>
          </Tab>
          <Tab key='settings' title='设置' className='h-full'>
            <Card>
              <CardBody>Settings...</CardBody>
              <input type="text" />
            </Card>
          </Tab>
          <Tab key='about' title='关于' className='h-full'>
            <Card>
              <CardBody>
                <HelpList></HelpList>
                <h2 className='text-lg font-bold'>开发中</h2>
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

function HelpList() {
  return (
    <BorderWrapper className='px-2 mb-2'>
      <h1 className='text-2xl font-bold pb-1'>帮助</h1>
      <div className='flex gap-2 flex-wrap '>
        <HelpTooltip content={'例如"00:05.00”、"23.189"、"12:03:45"的形式都是有效的，注意冒号是英文冒号'}>截取片段</HelpTooltip>
        <HelpTooltip content={'负数表示自适应。例如，”720x-2"表示横轴分辨率为720，纵轴分辨率为自适应且能够整除-2'}>新分辨率</HelpTooltip>
      </div>
    </BorderWrapper>
  );
}

function HelpTooltip({ children, content }) {
  return (
    <Tooltip content={content} placement='bottom' offset={4} className='rounded-small'>
      <Chip size='lg' radius='sm'>
        {children}
      </Chip>
    </Tooltip>
  );
}
