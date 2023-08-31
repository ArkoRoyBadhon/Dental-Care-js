import { createTheme, colors } from "@mui/material";

export const theme = createTheme({
  status: {
    danger: "red",
  },
  palette: {
    secondary: {
      main: colors.blue[200],
    },
    customColor: {
      main: "#666666"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
