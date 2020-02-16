import { useStoreState } from 'easy-peasy';

import light from '../themes/light';
import dark from '../themes/dark';

export default theme => {
  if (!theme) theme = useStoreState(({ ui }) => ui.theme);
  switch (theme) {
    case 'light':
      return light;
    case 'dark':
      return dark;
    default:
      return light;
  }
};
