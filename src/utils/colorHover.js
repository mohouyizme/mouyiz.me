import Color from 'color';

export default (color, theme) => {
  switch (theme) {
    case 'light':
      return Color(color)
        .darken(0.1)
        .hex();
    case 'dark':
      return Color(color)
        .lighten(0.1)
        .hex();
    default:
      return color;
  }
};
