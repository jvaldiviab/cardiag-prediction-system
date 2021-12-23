import { StyledEngineProvider, ThemeProvider } from '@material-ui/core';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

export default function General() {
  const content = useRoutes(routes);

  return (
    <StyledEngineProvider injectFirst>
      {content}
    </StyledEngineProvider>
  );
}
