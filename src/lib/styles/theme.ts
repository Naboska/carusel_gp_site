import { theme as baseTheme } from 'elui-react';

export const theme = {
  ...baseTheme,
  media: {
    desktop: '1824px',
    laptop: '1440px',
    tablet: '1024px',
    mobile: '375px',
  },
  palette: {
    ...baseTheme.palette,
    primary_50: '#f0fdf4',
    primary_100: '#dcfce7',
    primary_200: '#bbf7d0',
    primary_300: '#86efac',
    primary_400: '#4ade80',
    primary_500: '#22c55e',
    primary_600: '#16a34a',
    primary_700: '#15803d',
    primary_800: '#166534',
    primary_900: '#14532d',
    grey_50: '#f3f3f3',
    grey_100: '#e2e4e1',
    grey_200: '#d3d8d4',
    grey_300: '#c4cbc4',
    grey_400: '#a3ada4',
    grey_500: '#849084',
    grey_600: '#677367',
    grey_700: '#4f564e',
    grey_800: '#353C35',
    grey_900: '#1E201D',
  },
};
