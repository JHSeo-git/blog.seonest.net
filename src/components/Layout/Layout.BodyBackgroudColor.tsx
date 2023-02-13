'use client';

import { useTheme } from 'next-themes';
import { useMemo } from 'react';

import BodyBackgroundColor from '../BodyBackgroundColor';
import type { HeaderMode } from './Layout.Base';

export interface LayoutBodyBackgroudColorProps {
  headerMode?: HeaderMode;
  lightColor: string;
  darkColor: string;
}

function LayoutBodyBackgroudColor({
  headerMode,
  lightColor,
  darkColor,
}: LayoutBodyBackgroudColorProps) {
  const { theme } = useTheme();
  const color = theme === 'light' ? lightColor : darkColor;

  return <>{headerMode === 'grayscale' && <BodyBackgroundColor color={color} />}</>;
}

export default LayoutBodyBackgroudColor;
