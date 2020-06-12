import React, { useEffect, useState } from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron, debug } from '../styletron';
import { BaseProvider, DarkTheme } from 'baseui';
import { ThemeSwitcherProvider, THEME } from '../contexts/theme/theme.provider';
import { LocalLight } from '../themes/local.light';
import styled from 'styled-components';

const StorybookContainer = styled.div`
  background: #90a4ae;
  min-height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    background: white;
    max-width: 100%;
    min-width: 300px;
  }
`;

export const StoryContainerDecorator = (storyFn) => {
  const [theme, setTheme] = useState(THEME.light);
  useEffect(() => {
    let SAVED_THEME = localStorage.getItem('theme');
    if (SAVED_THEME === null) {
      SAVED_THEME = THEME.light;
    }
    setTheme(SAVED_THEME);
  }, []);
  return (
    <ThemeSwitcherProvider value={{ theme, setTheme }}>
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <BaseProvider
          theme={
            theme === THEME.light
              ? { ...LocalLight, direction: 'ltr' }
              : { ...DarkTheme, direction: 'ltr' }
          }
        >
          <StorybookContainer>{storyFn()}</StorybookContainer>
        </BaseProvider>
      </StyletronProvider>
    </ThemeSwitcherProvider>
  );
};
