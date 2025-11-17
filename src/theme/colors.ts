import type { Theme } from 'unocss/preset-wind4';
import { palette } from '../colors/palette';

export const generateThemeColors = (colors: string[]) =>
  colors.reduce((acc, color) => {
    for (let i = 1; i <= 12; i++) {
      acc[`${color}-${i}`] = `var(--color-${color}-${i})`;
      acc[`${color}-a${i}`] = `var(--color-${color}-a${i})`;
    }
    acc[`${color}-fg`] = `var(--color-${color}-fg)`;
    return acc;
  }, {} as Record<string, string>);

export const colors: Theme['colors'] = {
  current: 'currentColor',
  transparent: 'transparent',
  inherit: 'inherit',

  ...generateThemeColors([
    ...palette,
    'hue',
  ]),
};
