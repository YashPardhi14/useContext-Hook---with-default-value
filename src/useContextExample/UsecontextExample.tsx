import * as React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import MyChild from '../myChild/MyChild';

type ThemeContectType = 'light' | 'dark';

export const ThemeContext = createContext<ThemeContectType>('light');

export default function CreatContext() {
  const [theme, setTheme] = useState<ThemeContectType>('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <MyChild />
    </ThemeContext.Provider>
  );
}
