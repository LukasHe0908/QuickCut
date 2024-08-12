'use client';
import { Card, CardBody, Button, Textarea } from '@nextui-org/react';
import LeftPanel from './leftPanel';
import RightPanel from './rightPanel';

export default function App() {
  return (
    <Card>
      <CardBody className='gap-4'>
        {/* Upper */}
        <div className='flex gap-4'>
          <LeftPanel></LeftPanel>
          <RightPanel></RightPanel>
        </div>
        {/* Lower */}
        <div className='flex gap-3 flex-col'>
          <Textarea className='w-full' placeholder='自动生成的总命令' minRows={10} maxRows={10} />
          <Button>运行</Button>
        </div>
      </CardBody>
    </Card>
  );
}
