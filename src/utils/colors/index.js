const mainColors = {
  green1: '#613eed',
  green2: '#cfe6ff',
  blue1: '#0f83ff',
  dark1: '#112340',
  dark2: '#9EA4B4',
  gray1: '#7D8797',
  gray2: '#e9e9e9',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.gray1,
    MenuinActive: mainColors.dark2,
    MenuActive: mainColors.blue1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
  border: mainColors.gray2,
  cardLight: mainColors.green2,
};
