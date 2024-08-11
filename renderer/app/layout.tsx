'use client';
import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import 'overlayscrollbars/overlayscrollbars.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='en'>
        <head>
          <title>Quick Cut</title>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        </head>
        <body>
          <NextUIProvider className='h-full'>{children}</NextUIProvider>
        </body>
      </html>
    </>
  );
}
