import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh"
  }
}));

function Background({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

export default Background;
