export const palette = [
  'red',
  'purple',
  'violet',
  'blue',
  'teal',
  'green',
  'orange',
  'yellow',
  'gray',
] as const;

export const fgColor: Record<typeof palette[number], string | [string, string]> = {
  red: 'white',
  purple: 'white',
  violet: 'white',
  blue: 'white',
  teal: 'white',
  green: 'white',
  orange: 'white',
  yellow: 'black',
  gray: ['white', 'dark'],
};
