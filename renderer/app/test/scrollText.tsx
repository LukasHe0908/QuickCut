import { useEffect, useRef, useState } from 'react';
import { Checkbox } from '@nextui-org/react';

export default function scrollText() {
  const [text, setText] = useState('');
  const [update, setUpdate] = useState(true);
  const scrollComponent = useRef();
  useEffect(() => {
    update &&
      setTimeout(() => {
        let textAdd = `\n[${new Date().toLocaleString()}] Sample ${crypto.randomUUID()}`;
        let foo = scrollComponent.current as HTMLDivElement;
        if (text.length > 1024 * 1024) {
          foo.scrollTo({ top: 0, behavior: 'instant' });
          setText(textAdd);
        } else {
          setText(text + textAdd);
        }
        setTimeout(() => {
          foo.scrollTo({ top: foo.scrollHeight, behavior: 'smooth' });
        }, 10);
      }, 100 + Math.random() * 300);
  }, [text, update]);
  return (
    <>
      <Checkbox isSelected={update} onValueChange={setUpdate}>
        更新
      </Checkbox>
      <div
        className='h-[300px] scrollbar-hide overflow-hidden [mask-image:linear-gradient(180deg,transparent,#000_2em,#000_calc(100%-4em),transparent)] whitespace-pre-line'
        ref={scrollComponent}
      >
        <div className='h-full'></div>
        <span>{text}</span>
      </div>
    </>
  );
}
