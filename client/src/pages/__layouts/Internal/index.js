import React from "react";
import { PropTypes } from "prop-types";
import systemTheme from "../../../styles/themes";
import { ThemeProvider } from "@material-ui/core";

function Internal({ children }) {
  return <ThemeProvider theme={systemTheme()}>{children}</ThemeProvider>;
}

Internal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Internal;
