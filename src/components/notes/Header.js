import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root : {
        backgroundColor: 'white',
    },
    typography:{
        color: 'grey'
    }
});

export default props => (
  <AppBar position="static" className={useStyles().root}>
    <Toolbar>
      <Typography variant="h6" className={useStyles().typography}>G Notes</Typography>
    </Toolbar>
  </AppBar>
);