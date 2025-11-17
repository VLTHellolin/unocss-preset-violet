import type { Preset } from 'unocss';
import type { Theme } from 'unocss/preset-wind4';
import { getCSS } from './colors/css';
import { hue } from './rules/hue';
import { blur } from './theme/blur';
import { colors } from './theme/colors';
import { radius } from './theme/radius';

export const presetViolet = (): Preset<Theme> => {
  return {
    name: 'unocss-preset-violet',
    rules: [
      hue,
    ],
    theme: {
      blur,
      colors,
      radius,
    },
    preflights: [{ getCSS }],
  };
};

export default presetViolet;
