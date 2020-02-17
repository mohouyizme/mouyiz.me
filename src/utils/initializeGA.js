import ReactGA from 'react-ga';

import { googleAnalyticsID } from '../data/config';

export default history => {
  ReactGA.initialize(googleAnalyticsID);
  ReactGA.set({ page: history.location.pathname });
  ReactGA.pageview(history.location.pathname);
  history.listen(({ pathname }) => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });
};
