import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spinnerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
}));

function LoadingSpinner() {
  const classes = useStyles();

  return (
    <div className={classes.spinnerContainer}>
      <CircularProgress />
    </div>
  );
}

export default LoadingSpinner;
