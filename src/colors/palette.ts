export const palette = [
  'red',
  'purple',
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
  blue: 'white',
  teal: 'white',
  green: 'white',
  orange: 'white',
  yellow: 'black',
  gray: ['white', 'dark'],
};
