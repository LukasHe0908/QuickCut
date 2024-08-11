import { useEffect, useState } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export default function ScrollBar({
  children,
  className,
  element,
  autoHide = 'move',
  autoHideDelay,
  autoHideSuspend,
}: {
  children;
  element?;
  className?;
  autoHide?: 'never' | 'scroll' | 'move' | 'leave';
  autoHideDelay?: number;
  autoHideSuspend?: boolean;
}) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      setDarkMode(event.matches);
    });
  }, []);
  return (
    <OverlayScrollbarsComponent
      className={'overflow-auto ' + className}
      options={{
        scrollbars: {
          autoHide: autoHide,
          autoHideDelay: autoHideDelay,
          autoHideSuspend: autoHideSuspend,
          theme: 'os-theme-' + (darkMode ? 'light' : 'dark'),
        },
      }}
      element={element}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}
