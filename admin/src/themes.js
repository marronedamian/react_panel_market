import {
  createCustomThemes,
  dactPurple,
  secondaryColor,
  backgroundBlack,
  textLight,
} from "@dact/core"

const themeColors = {
  main: {
    palette: {
      type: "light",
      primary: {
        main: dactPurple,
        contrastText: "#ffffff",
      },
      secondary: secondaryColor,
      darkBackground: backgroundBlack,
      text: textLight,
    },
  },
  leftSidebar: {
    palette: {
      type: "dark",
      primary: {
        main: backgroundBlack,
        contrastText: "#ffffff",
      },
      secondary: secondaryColor,
    },
  },
  topbar: {
    palette: {
      type: "dark",
      primary: {
        main: dactPurple,
        contrastText: "#ffffff",
      },
      secondary: secondaryColor,
      background: {
        paper: backgroundBlack,
        default: backgroundBlack,
      },
    },
  },
}

export default createCustomThemes(themeColors)
