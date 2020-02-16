import { createStore, action } from 'easy-peasy';

export default createStore({
  ui: {
    theme: localStorage.getItem('theme') || 'light',
    menuIsOpen: false,
    toggleTheme: action((state, _payload) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    }),
    toggleMenu: action((state, _payload) => {
      state.menuIsOpen = !state.menuIsOpen;
    })
  }
});
