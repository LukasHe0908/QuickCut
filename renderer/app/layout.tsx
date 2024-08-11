'use client';
import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import 'overlayscrollbars/overlayscrollbars.css';
import ScrollBar from './components/scroll';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='en' className='!bg-[#fff2] dark:!bg-[#0002]'>
        <head>
          <title>Quick Cut</title>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        </head>
        <body>
          <NextUIProvider className='h-full w-full dark:dark'>
            <ScrollBar className='h-full w-full'>{children}</ScrollBar>
          </NextUIProvider>
        </body>
      </html>
    </>
  );
}
