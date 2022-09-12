import { createTheme } from "@material-ui/core";

export default function systemTheme(darkMode) {
  return createTheme({
    palette: {
      typw: (darkMode && "dark") || "light",
    },
  });
}
