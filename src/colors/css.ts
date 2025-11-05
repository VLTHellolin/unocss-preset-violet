import * as Radix from '@radix-ui/colors';
import { fgColor, palette } from './palette';

// const stripColor = (colorVar: string) => colorVar.replace('color(', '').replace(')', '').trim();

const mapCssVars = (colors: Record<string, string>) =>
  Object.entries(colors).map(([key, value]) => {
    const varName = `--color-${key.replace(/([A-Z1-9])/, '-$1').toLowerCase()}`;
    return `  ${varName}: ${value};`;
  }).join('\n');

const makeVars = (dark: boolean) =>
  palette.map(color => mapCssVars({
    ...Radix[
      `${color}${dark ? 'Dark' : ''}P3` as keyof typeof Radix
    ],
    ...Radix[
      `${color}${dark ? 'Dark' : ''}P3A` as keyof typeof Radix
    ],
    [`${color}-fg`]: fgColor[color],
  })).join('\n');

export const getCSS = () => {
  const lightVars = makeVars(false);
  const darkVars = makeVars(true);

  return `@layer theme {
:root {
${lightVars}
}
.dark {
${darkVars}
}
}`;
};
