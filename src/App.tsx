import { StrictMode } from 'react';
import MyRoute from './Route';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SnackbarAlert from './components/SnackbarAlert';
import { CssBaseline, ScopedCssBaseline, StyledEngineProvider } from '@mui/material';
// import './history';
export const commonUseRequestParams = {
  loadingDelay: 300,
  throttleWait: 300,
};
export default () =>
  //@ts-expect-error
  <StrictMode><StyledEngineProvider injectFirst><ScopedCssBaseline><CssBaseline /><Provider store={store}>
    <StrictMode>
      <HashRouter>
        <MyRoute />
      </HashRouter>
      <SnackbarAlert />
    </StrictMode>
  </Provider>
  </ScopedCssBaseline>
  </StyledEngineProvider>
  </StrictMode>;
