import type { Rule } from 'unocss';
import { palette } from '../colors/palette';

export const hue: Rule = [
  /^hue-(\S+)$/,
  ([, color]) => {
    if (!(color in palette)) return {};

    const vars: Record<string, string> = {};
    for (let i = 1; i <= 12; i++) {
      vars[`--color-hue-${i}`] = `var(--color-${color}-${i})`;
      vars[`--color-hue-a${i}`] = `var(--color-${color}-a${i})`;
    }
    vars['--color-hue-fg'] = `var(--color-${color}-fg)`;

    return vars;
  },
];
