export const palette = [
  'red',
  'purple',
  'blue',
  'teal',
  'green',
  'orange',
  'yellow',
] as const;

export const fgColor: Record<typeof palette[number], string> = {
  red: 'white',
  purple: 'white',
  blue: 'white',
  teal: 'white',
  green: 'white',
  orange: 'white',
  yellow: 'black',
};
