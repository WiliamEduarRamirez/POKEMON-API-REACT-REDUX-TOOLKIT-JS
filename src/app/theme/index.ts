import { createTheme, ThemeOptions } from '@mui/material';
import themePalette from './palette';
// assets
import colors from '../assets/scss/abstracts/_theme-variables.module.scss';

export const theme = () => {
  const color = colors;

  const themeOption = {
    colors: color
  };

  const themeOptions: ThemeOptions = {
    palette: themePalette(themeOption)
  };

  return createTheme(themeOptions);
};

export default theme;
