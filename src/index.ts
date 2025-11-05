import type { Preset, Rule } from 'unocss';
import type { Theme } from 'unocss/preset-wind4';
import { getCSS } from './colors/css';
import { hue } from './rules/hue';
import { blur } from './theme/blur';
import { radius } from './theme/radius';

export const rules: Rule<Theme>[] = [
  hue,
];

export const theme: Theme = {
  blur,
  radius,
};

export const presetViolet = (): Preset<Theme> => {
  return {
    name: 'unocss-preset-violet',
    rules,
    theme,
    preflights: [{ getCSS }],
  };
};

export default presetViolet;
