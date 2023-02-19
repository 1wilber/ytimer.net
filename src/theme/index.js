import {createTheme} from '@mui/material/styles';
import {variants, labels} from '@catppuccin/palette'

const theme = createTheme({
  palette: {
    primary: {
      main: variants.mocha.teal.hex,
      light: "#fdba74",
      dark: labels.teal.latte.hex,
    },

    secondary: {
      main: "#262626",
      light: "#3f3f46",
      dark: "#171717",
    },

    text: {
      primary: variants.mocha.text.hex,
      secondary: "#a1a1aa",
      main: labels.teal.macchiato.hex
    },

    background: {
      default: "#27272a",
      paper: "#27272a",
      defaultChannel: "#27272a"
    }
  },

  typography: {
    fontFamily: "'Montserrat', sans-serif"
  }
})

export default theme
