'use client';
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import 'overlayscrollbars/overlayscrollbars.css';
import ScrollBar, { themeContext } from './components/scroll';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    let darkMatch = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(darkMatch.matches);
    darkMatch.addEventListener('change', event => {
      setDarkMode(event.matches);
    });
  }, []);
  useEffect(() => {
    const handleDragStart = event => {
      event.preventDefault();
    };
    document.body.addEventListener('drop', handleDragStart);
    return () => {
      document.body.removeEventListener('drop', handleDragStart);
    };
  }, []);

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
            <themeContext.Provider value={darkMode}>
              <ScrollBar className='h-full w-full'>{children}</ScrollBar>
            </themeContext.Provider>
          </NextUIProvider>
        </body>
      </html>
    </>
  );
}
