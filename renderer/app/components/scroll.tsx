import { createContext, useContext } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export const themeContext = createContext(false);

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
  const darkMode = useContext(themeContext);
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
