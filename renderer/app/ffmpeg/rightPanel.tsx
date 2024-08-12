import { Button } from '@nextui-org/react';
import SelectList from '../components/selectList';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function RightPanel() {
  return (
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
  );
}
