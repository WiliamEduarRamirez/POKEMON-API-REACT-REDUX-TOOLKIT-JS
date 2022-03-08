import Routes from './app/routes';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import themes from './app/theme';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes()}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
