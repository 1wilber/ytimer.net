import { createTheme } from '@mui/material/styles';
import { light, dark } from "@/theme/colors"


function theme(mode = "light") {
  const { whiteMain, whiteDark, gray, grayDark, mainColor, textColor } = mode === "light" ? light : dark

  return createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 28,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor: grayDark,
            boxShadow: "none",
            backgroundColor: whiteMain
          },
          head: {
            backgroundColor: grayDark,
            fontWeight: "bold",
          },
          boxShadow: "none",
        }
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            textAlign: "center",
            borderRadius: "0.5rem",
            margin: "0px",
            backgroundColor: whiteDark

          },
        }
      },
      MuiMenu: {
        styleOverrides: {
          root: {
            borderRadius: "2rem",
            boxShadow: "none",
          },
          paper: {
            borderRadius: "2rem",
            marginTop: "0.3rem",
            padding: "0px 0.625rem",
          }
        }
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            "&.MuiMenu-paper": {
              backgroundColor: whiteMain
            },

          }
        }
      },

      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: mainColor,
            },
            borderRadius: "0.5rem",
            marginBottom: "0.3rem",
          },
        }
      },
    },

    palette: {
      mode: "light",
      primary: {
        main: mainColor,
        light: whiteDark, 
      },
      secondary: {
        main: whiteMain,
        light: grayDark,
        dark: whiteDark,
      },
      text: {
        primary: textColor,
      },

      background: {
        // default: "red",
      }
    },

    typography: {
      fontFamily: "'Montserrat', sans-serif"
    }
  })


}

export default theme

